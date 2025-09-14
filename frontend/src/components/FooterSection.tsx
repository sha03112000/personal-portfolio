import React from "react";


const FooterSection: React.FC = () => {
    return (
        <footer className="text-white py-6 px-4 border-t border-gray-300 mt-10">
            <p className="text-sm md:text-base font-normal text-center">
                &copy; {new Date().getFullYear()} Shabad. All rights reserved.
            </p>
        </footer>
    );
};

export default FooterSection;