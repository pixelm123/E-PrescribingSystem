import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Layout from './Layout';
import "../../styles/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', loginData);
            console.log(response.data);

            redirectToDashboard(response.data.role.toLowerCase());
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid username or password');
        }
    };

    const redirectToDashboard = (role) => {
        switch (role) {
            case 'admin':
                navigate('/admin/dashboard');
                break;
            case 'doctor':
                navigate('/doctor/dashboard');
                break;
            case 'nurse':
                navigate('/nurse/dashboard');
                break;
            case 'pharmacist':
                navigate('/pharmacist/dashboard');
                break;
            default:
                navigate('/');
                break;
        }
    };

    return (
        <Layout>
            <div className="login">
                <div className="login-content">
                    <div className="about-image">
                        <img src="/login.jpg" alt="Login" />
                    </div>
                    <div className="login-form">
                        <h2 className="login-title">Login</h2>
                        <p className="login-description">Enter your credentials to manage prescriptions efficiently and ensure patient care.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={loginData.rememberMe}
                                        onChange={(e) =>
                                            setLoginData({
                                                ...loginData,
                                                rememberMe: e.target.checked,
                                            })
                                        }
                                    />
                                    Remember me
                                </label>
                            </div>
                            {error && <div className="error">{error}</div>}
                            <button type="submit" className="form-button">Login</button>
                        </form>
                        <div>
                            <p>Dont have an account? <Link to="/register">Register here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>


    );
};

export default Login;
