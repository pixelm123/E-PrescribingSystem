
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
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

            <main className="main-content">
                {children}
            </main>

            <footer>
                <div className="footer-links">
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/compliance">Compliance Information</a>
                </div>
                <div className="social-media">
                    {/*social media icons with links */}
                </div>
                <div className="copyright">
                    <p>&copy; 2024 MediSynRx All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
