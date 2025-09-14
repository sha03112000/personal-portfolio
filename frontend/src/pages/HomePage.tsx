import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import FooterSection from "../components/FooterSection";


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen pt-10 px-4 sm:px-6 md:px-15">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <FooterSection />
        </div>

    );
};

export default HomePage;