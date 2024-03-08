
import React from 'react';

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <h2>How It Works</h2>
            <div className="step-by-step-guide">

                <div className="step">
                    <h3>Step 1: Log In</h3>
                    <p>Sign in to your account using your credentials.</p>
                </div>

                <div className="step">
                    <h3>Step 2: Create Prescription</h3>
                    <p>Create a new prescription for your patient.</p>
                </div>

                <div className="step">
                    <h3>Step 3: Verify Information</h3>
                    <p>Review and verify patient information and medication details.</p>
                </div>

                <div className="step">
                    <h3>Step 4: Send Prescription</h3>
                    <p>Send the prescription electronically to the patient preferred pharmacy.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
