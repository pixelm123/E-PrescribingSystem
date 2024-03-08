
import React from 'react';

const Footer = () => {
    return (
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
                <p>&copy; 2024 Your Hospital Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
