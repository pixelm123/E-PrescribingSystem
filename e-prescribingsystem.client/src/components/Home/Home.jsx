import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <section className="hero">
                <div className="hero-content">
                    <h1>Revolutionize Your Prescription Process</h1>
                    <p>Efficiency, accuracy, and patient safety at your fingertips.</p>
                </div>
                <img src="/Home.jpg" alt="Home" />
            </section>

            <section className="features">
                <h2>Key Features</h2>
                <div className="feature-grid">

                    <div className="feature">
                        <img src="/icon-for-electronic-prescription.jpg" alt="Electronic Prescription Sending" />
                        <h3>Electronic Prescription Sending</h3>
                        <p>Effortlessly send electronic prescriptions to pharmacies.</p>
                    </div>


                    <div className="feature">
                        <img src="/icon-for-drug-interaction-check.jpg" alt="Automated Drug Interaction Checks" />
                        <h3>Automated Drug Interaction Checks</h3>
                        <p>Ensure patient safety with automated drug interaction checks.</p>
                    </div>


                    <div className="feature">
                        <img src="/icon-medication-history.png" alt="Patient Medication History Access" />
                        <h3>Patient Medication History Access</h3>
                        <p>Access and review patients medication history for better treatment decisions.</p>
                    </div>


                    <div className="feature">
                        <img src="/icon-pharmacy-integration.png" alt="Pharmacy Integration" />
                        <h3>Pharmacy Integration</h3>
                        <p>Seamlessly integrate with pharmacies for quick and efficient prescription processing.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="step-by-step-guide">
                    <div className="step">
                        <h3>Step 1: Log In</h3>
                        <p>Sign in to your account using your credentials.</p>
                    </div>

                    <img src="/Arrow-icon.jpg" alt="Arrow" className="arrow" />

                    <div className="step">
                        <h3>Step 2: Create Prescription</h3>
                        <p>Create a new prescription for your patient.</p>
                    </div>

                    <img src="/Arrow-icon.jpg" alt="Arrow" className="arrow" />

                    <div className="step">
                        <h3>Step 3: Verify Information</h3>
                        <p>Review and verify patient information and medication details.</p>
                    </div>

                    <img src="/Arrow-icon.jpg" alt="Arrow" className="arrow" />

                    <div className="step">
                        <h3>Step 4: Send Prescription</h3>
                        <p>Send the prescription electronically to the patient preferred pharmacy.</p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Get Started Today</h2>
                <p>Join the revolution in prescription management. Sign up now!</p>
                <Link to="/register">
                    <button>Get Started</button>
                </Link>
            </section>
        </Layout>
    );
};

export default Home;
