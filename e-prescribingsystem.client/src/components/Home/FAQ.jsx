import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../../styles/FAQ.css";

const FAQ = () => {
    return (
        <div>
            <Header />
            <section className="faq">
                <div className="faq-content">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>How do I create a new prescription?</h3>
                            <p>To create a new prescription, navigate to the prescriptions section in your dashboard and click on the &quot;Create New Prescription&quot; button.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h3>Can I review a patient medication history?</h3>
                            <p>Yes, you can access and review a patient medication history by searching for the patient in the system and viewing their profile.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What happens if there is a drug interaction?</h3>
                            <p>If a drug interaction is detected, the system will alert you immediately, allowing you to make informed decisions about the prescription.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How can I integrate the system with my pharmacy?</h3>
                            <p>Integration with pharmacies is seamless and can be set up by contacting our support team. We provide comprehensive documentation and assistance throughout the integration process.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FAQ;
