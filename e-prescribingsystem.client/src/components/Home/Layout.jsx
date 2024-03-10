import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "../../styles/Home.css";

const Layout = ({ children }) => {
    return (
        <div>
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

            {children}

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

            <section className="cta">
                <h2>Get Started Today</h2>
                <p>Join the revolution in prescription management. Sign up now!</p>
                <Link to="/register">
                    <button>Get Started</button>
                </Link>
            </section>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
