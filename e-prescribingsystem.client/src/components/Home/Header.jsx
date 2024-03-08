import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/Logo.png" alt="Hospital Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/login">Login/Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
