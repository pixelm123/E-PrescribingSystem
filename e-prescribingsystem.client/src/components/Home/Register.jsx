import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/Register.css";
import { ROLES } from '../../roles'; 
import { useNavigate, Link } from 'react-router-dom'; 

const Register = () => {
    const navigation = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        role: ROLES.NURSE,
        hospitalName: '', 
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

        return errors;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
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
                <button type="submit">Register</button>
            </form>
            <div>
               
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
