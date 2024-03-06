// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="logo">
                    <img src="path-to-your-logo.png" alt="Hospital Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/login">Login/Sign Up</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Revolutionize Your Prescription Process</h1>
                    <p>Efficiency, accuracy, and patient safety at your fingertips.</p>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Key Features</h2>
                <div className="feature-grid">
                    {/* Feature 1 */}
                    <div className="feature">
                        <img src="icon-for-feature-1.png" alt="Feature 1" />
                        <h3>Electronic Prescription Sending</h3>
                        <p>Effortlessly send electronic prescriptions to pharmacies.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="feature">
                        <img src="icon-for-feature-2.png" alt="Feature 2" />
                        <h3>Automated Drug Interaction Checks</h3>
                        <p>Automatically check for drug interactions to ensure patient safety.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="feature">
                        <img src="icon-for-feature-3.png" alt="Feature 3" />
                        <h3>Patient Medication History Access</h3>
                        <p>Access patient medication history for better treatment decisions.</p>
                    </div>
                    {/* Feature 4 */}
                    <div className="feature">
                        <img src="icon-for-feature-4.png" alt="Feature 4" />
                        <h3>Pharmacy Integration</h3>
                        <p>Integrate seamlessly with pharmacies for streamlined prescription processing.</p>
                    </div>
                </div>
            </section>


            {/* How It Works Section */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="step-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Step 1: Sign Up</h3>
                            <p>Create an account with your email and password.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Step 2: Login</h3>
                            <p>Log in to your account using your credentials.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Step 3: Send Prescriptions</h3>
                            <p>Select a patient, enter prescription details, and send to the pharmacy.</p>
                        </div>
                    </div>
                    {/* Add more steps as needed */}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <h2>Get Started Today</h2>
                <p>Join the revolution in prescription management. Sign up now!</p>
                <Link to="/register">
                    <button>Get Started</button>
                </Link>
                {/* Contact information */}
            </section>

            {/* Footer Section */}
            <footer>
                <div className="footer-links">
                    <ul>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/compliance">Compliance Information</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/yourhospital"><img src="facebook-icon.png" alt="Facebook" /></a>
                    <a href="https://twitter.com/yourhospital"><img src="twitter-icon.png" alt="Twitter" /></a>
                    <a href="https://www.instagram.com/yourhospital"><img src="instagram-icon.png" alt="Instagram" /></a>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 Your Hospital. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;
