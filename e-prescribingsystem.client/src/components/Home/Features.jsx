
import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <h2>Key Features</h2>
            <div className="feature-grid">

                <div className="feature">
                    <img src="icon-for-electronic-prescription.png" alt="Electronic Prescription Sending" />
                    <h3>Electronic Prescription Sending</h3>
                    <p>Effortlessly send electronic prescriptions to pharmacies.</p>
                </div>


                <div className="feature">
                    <img src="icon-for-drug-interaction-checks.png" alt="Automated Drug Interaction Checks" />
                    <h3>Automated Drug Interaction Checks</h3>
                    <p>Ensure patient safety with automated drug interaction checks.</p>
                </div>


                <div className="feature">
                    <img src="icon-for-patient-medication-history.png" alt="Patient Medication History Access" />
                    <h3>Patient Medication History Access</h3>
                    <p>Access and review patients medication history for better treatment decisions.</p>
                </div>


                <div className="feature">
                    <img src="icon-for-pharmacy-integration.png" alt="Pharmacy Integration" />
                    <h3>Pharmacy Integration</h3>
                    <p>Seamlessly integrate with pharmacies for quick and efficient prescription processing.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;