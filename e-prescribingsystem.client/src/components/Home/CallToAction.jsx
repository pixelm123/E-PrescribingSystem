
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="cta">
            <h2>Get Started Today</h2>
            <p>Join the revolution in prescription management. Sign up now!</p>
            <Link to="/register">
                <button>Get Started</button>
            </Link>

        </section>
    );
};

export default CallToAction;
