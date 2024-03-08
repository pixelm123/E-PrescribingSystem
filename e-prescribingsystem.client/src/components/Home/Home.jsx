import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import CallToAction from './CallToAction';
import Footer from './Footer';
import "../../styles/Home.css";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <HowItWorks />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Home; 
