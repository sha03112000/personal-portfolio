import React from "react";
import HeroImage from "/assets/smk.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowAltCircleDown } from 'react-icons/fa';

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="text-white flex flex-col md:flex-row items-center justify-between py-10 px-6 ">
            {/* Left Section (Text) */}
            <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
                <h1 className="text-3xl md:text-3xl font-bold mb-4">
                    Hi, I'm Shabad, Welcome to My Portfolio
                </h1>
                <p className="text-lg md:text-xl font-medium mb-6">
                    Full-Stack Developer | React & Node.js Enthusiast
                </p>
                <p className="text-sm md:text-base font-normal max-w-2xl mx-auto md:mx-0">
                    A Self-Taught Full-Stack Developer, passionate and highly motivated with hands-on experience building dynamic, responsive, and scalable web applications. Skilled in both front-end and back-end development, with a solid grasp of modern technologies including HTML, CSS, JavaScript, React, Node.js, Express, and databases SQL/NoSQL.
                </p>

                <button className="mt-5 px-6 py-2 bg-gray-300 text-black font-normal rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                    Download Resume <FaArrowAltCircleDown className="inline ml-2" />
                </button>

                <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
                    <span>Follow Me:</span>
                    <FaFacebook
                        size={18}
                        className="hover:text-gray-300 cursor-pointer"
                    />
                    <FaInstagram
                        size={18}
                        className="hover:text-gray-300 cursor-pointer"
                    />
                    <FaLinkedin
                        size={18}
                        className="hover:text-gray-300 cursor-pointer"
                    />
                </div>
            </div>

            {/* Right Section (Image) */}
            <div className="flex-1 flex justify-center md:justify-end">
                <img
                    src={HeroImage}
                    alt="Hero Image"
                    className="w-64 h-auto md:w-96 object-contain rounded-md"
                />
            </div>
        </section>
    );
};

export default HeroSection;
