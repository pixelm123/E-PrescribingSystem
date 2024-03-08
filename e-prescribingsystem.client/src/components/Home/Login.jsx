import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/Login.css";
import { useNavigate, Link } from 'react-router-dom';

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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
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
                <button type="submit">Login</button>
            </form>
            <div>
               
                <p>Dont have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
};

export default Login;
