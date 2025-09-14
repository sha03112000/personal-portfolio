import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className= "text-white py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row items-start  justify-between gap-10">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-semibold mb-4">
            Drop Me a Message
          </h1>

          <p className="text-sm md:text-base font-normal max-w-2xl mx-auto md:mx-0">
            A Self-Taught Full-Stack Developer, passionate and highly motivated
            with hands-on experience building dynamic, responsive, and scalable
            web applications. Skilled in both front-end and back-end
            development, with a solid grasp of modern technologies including
            HTML, CSS, JavaScript, React, Node.js, Express, and databases
            SQL/NoSQL.
          </p>

          <div className="mt-6 flex flex-col space-y-4 md:items-start items-center ">
            <div className="flex items-center space-x-6">
              <Phone size={18} className="hover:text-gray-300 cursor-pointer" />
              <span>+91 8547412614</span>
            </div>
            <div className="flex items-center space-x-6">
              <Mail size={18} className="hover:text-gray-300 cursor-pointer" />
              <span>example@mail.com</span>
            </div>
            <div className="flex items-center space-x-6">
              <MapPin size={18} className="hover:text-gray-300 cursor-pointer" />
              <span>Location</span>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg w-full bg-gradient-to-b from-purple-900/30 to-purple-500/10 backdrop-blur-sm">
          <form className="w-full space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Type here..."
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Type here..."
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                placeholder="Type here..."
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
