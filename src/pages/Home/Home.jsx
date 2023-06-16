import React from 'react';
import PopularClasses from './PopularClasses';
import TopInstructors from './TopInstructors';
import Banner from './Banner';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import WelcomeBanner from './WelcomeBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <TopInstructors />
            <WelcomeBanner></WelcomeBanner>
            <TestimonialsSection />
            <ContactSection/>
        </div>
    );
};

export default Home;