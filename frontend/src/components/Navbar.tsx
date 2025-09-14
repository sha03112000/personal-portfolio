import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white flex items-center justify-between py-4 border-b border-gray-300">
            {/* Logo / Title */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                SHABAD PORTFOLIO{" "}
                <span className="text-xs sm:text-sm font-normal pl-2">
                    web developer
                </span>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex text-sm md:text-lg space-x-8 lg:space-x-12">
                <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                <li><a href="#about" className="hover:text-gray-300">About</a></li>
                <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="absolute top-16 right-4  shadow-lg rounded-xl p-5 flex flex-col space-y-4 md:hidden">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
