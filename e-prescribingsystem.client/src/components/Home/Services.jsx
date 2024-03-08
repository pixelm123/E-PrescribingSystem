import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../../styles/Services.css";

const Services = () => {
    return (
        <div>
            <Header />
            <section className="services">
                <div className="services-content">
                    <h2>Our Services</h2>
                    <div className="service">
                        <div className="service-icon">
                            <img src="/icon-electronic-prescription.jpg" alt="Electronic Prescription" />
                        </div>
                        <div className="service-details">
                            <h3>Electronic Prescription Creation</h3>
                            <p>Create electronic prescriptions quickly and efficiently, eliminating the need for paper prescriptions.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img src="/icon-medication-history.png" alt="Medication History" />
                        </div>
                        <div className="service-details">
                            <h3>Medication History Review</h3>
                            <p>Access and review patients medication history to ensure safe and effective treatment.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img src="/icon-allergy-alert.png" alt="Allergy Alerts" />
                        </div>
                        <div className="service-details">
                            <h3>Allergy Alerts</h3>
                            <p>Receive alerts for patient allergies to prevent adverse drug reactions.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img src="/icon-pharmacy-integration.png" alt="Pharmacy Integration" />
                        </div>
                        <div className="service-details">
                            <h3>Pharmacy Integration</h3>
                            <p>Seamlessly integrate with pharmacies for streamlined prescription processing and fulfillment.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Services;
