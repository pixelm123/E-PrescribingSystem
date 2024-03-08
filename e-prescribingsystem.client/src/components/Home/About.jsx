import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../../styles/About.css";

const About = () => {
    return (
        <div>
            <Header />
            <section className="about">
                <div className="about-content">
                    <h2>Welcome to MediSyncRx!</h2>
                    <p>At MediSyncRx, we are passionate about revolutionizing medication management in day hospitals. Our electronic prescribing system streamlines the prescription process, ensuring efficiency, accuracy, and patient safety.</p>
                    <p>With intuitive features like electronic prescription creation, medication history review, allergy alerts, and seamless pharmacy integration, we are dedicated to enhancing healthcare delivery.</p>
                    <p>Join us in transforming prescription management for modern healthcare. Together, we are making a difference—one prescription at a time.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
