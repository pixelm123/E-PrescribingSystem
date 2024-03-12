import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Layout from './Layout';
import { ROLES } from '../../roles';
import "../../styles/Register.css";

const Register = () => {
    const navigation = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        role: ROLES.NURSE,
        hospitalName: '',
        department: '',
        specialty: '',
        pharmacyName: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm(userData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            const response = await axios.post('/api/register', userData);
            console.log(response.data);

            redirectToDashboard(response.data.role.toLowerCase());
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const redirectToDashboard = (role) => {
        switch (role) {
            case 'admin':
                navigation.navigate('/admin/dashboard');
                break;
            case 'doctor':
                navigation.navigate('/doctor/dashboard');
                break;
            case 'nurse':
                navigation.navigate('/nurse/dashboard');
                break;
            case 'pharmacist':
                navigation.navigate('/pharmacist/dashboard');
                break;
            default:
                break;
        }
    };

    const validateForm = (userData) => {
        const errors = {};

        if (!userData.email) {
            errors.email = 'Email is required';
        } else if (!validateEmail(userData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!userData.password) {
            errors.password = 'Password is required';
        } else if (userData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (userData.password !== userData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (userData.role !== ROLES.ADMIN && !userData.hospitalName) {
            errors.hospitalName = 'Hospital name is required';
        }

        if (userData.role === ROLES.NURSE && !userData.department) {
            errors.department = 'Department is required for nurses';
        }

        if (userData.role === ROLES.DOCTOR && !userData.specialty) {
            errors.specialty = 'Specialty is required for doctors';
        }

        if (userData.role === ROLES.PHARMACIST && !userData.pharmacyName) {
            errors.pharmacyName = 'Pharmacy name is required for pharmacists';
        }

        return errors;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <Layout>
            <div className="register">
                <div className="register-content">
                    <div className="about-image">
                        <img src="/signup.webp" alt="Register" />
                    </div>
                    <div className="login-form">
                        <h2 className="login-title">Register</h2>
                        <p className="login-description">Enter your information to create an account.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={userData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                            </div>
                            <div className="form-group">
                                <label>Role:</label>
                                <select
                                    name="role"
                                    value={userData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    {Object.values(ROLES).map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                            {userData.role !== ROLES.ADMIN && (
                                <div className="form-group">
                                    <label>Hospital Name:</label>
                                    <input
                                        type="text"
                                        name="hospitalName"
                                        value={userData.hospitalName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.hospitalName && <span className="error">{errors.hospitalName}</span>}
                                </div>
                            )}
                            {userData.role === ROLES.NURSE && (
                                <div className="form-group">
                                    <label>Department:</label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={userData.department}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.department && <span className="error">{errors.department}</span>}
                                </div>
                            )}
                            {userData.role === ROLES.DOCTOR && (
                                <div className="form-group">
                                    <label>Specialty:</label>
                                    <input
                                        type="text"
                                        name="specialty"
                                        value={userData.specialty}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.specialty && <span className="error">{errors.specialty}</span>}
                                </div>
                            )}
                            {userData.role === ROLES.PHARMACIST && (
                                <div className="form-group">
                                    <label>Pharmacy Name:</label>
                                    <input
                                        type="text"
                                        name="pharmacyName"
                                        value={userData.pharmacyName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.pharmacyName && <span className="error">{errors.pharmacyName}</span>}
                                </div>
                            )}
                            <button type="submit">Register</button>
                        </form>
                        <div>
                            <p>Already have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
