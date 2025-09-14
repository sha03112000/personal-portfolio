import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaPython,
  FaLaravel,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiPostgresql,
  SiDjango,
  SiFlutter,
  SiExpress,
  SiMysql,
} from "react-icons/si";

// Tooltip wrapper
const IconWithTooltip = ({ icon: Icon, label, color }: { icon: any; label: string; color: string }) => (
  <div className="relative group flex flex-col items-center">
    <Icon size={40} className={`${color} transition-colors duration-200 cursor-pointer`} />
    <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition-all duration-200">
      {label}
    </span>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="text-white px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        About Me
      </h2>

      {/* About text */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base md:text-lg mb-4">
          I am a passionate Full-Stack Developer with experience in building
          dynamic and responsive web applications. My expertise lies in both
          front-end and back-end development, and I am proficient in modern
          technologies such as React, Node.js, and more.
        </p>
      </div>

      {/* Skills box */}
      <div className="bg-gradient-to-b from-purple-900/30 to-purple-500/10 backdrop-blur-sm py-8 px-6 rounded-xl mt-10 shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold mb-10 text-center">
          Skills & Technologies
        </h3>

        {/* Icons grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
          <IconWithTooltip icon={SiMysql} label="MySQL" color="hover:text-blue-400" />
          <IconWithTooltip icon={SiDjango} label="Django" color="hover:text-green-400" />
          <IconWithTooltip icon={SiTypescript} label="TypeScript" color="hover:text-blue-500" />
          <IconWithTooltip icon={SiFigma} label="Figma" color="hover:text-pink-400" />
          <IconWithTooltip icon={SiPostgresql} label="PostgreSQL" color="hover:text-indigo-400" />
          <IconWithTooltip icon={FaBootstrap} label="Bootstrap" color="hover:text-purple-400" />
          <IconWithTooltip icon={SiFlutter} label="Flutter" color="hover:text-cyan-400" />
          <IconWithTooltip icon={SiExpress} label="Express.js" color="hover:text-gray-400" />
          <IconWithTooltip icon={FaLaravel} label="Laravel" color="hover:text-red-500" />
          <IconWithTooltip icon={FaJs} label="JavaScript" color="hover:text-yellow-400" />
          <IconWithTooltip icon={SiMongodb} label="MongoDB" color="hover:text-green-500" />
          <IconWithTooltip icon={SiTailwindcss} label="Tailwind CSS" color="hover:text-cyan-400" />
          <IconWithTooltip icon={FaPython} label="Python" color="hover:text-yellow-400" />
          <IconWithTooltip icon={FaHtml5} label="HTML5" color="hover:text-orange-400" />
          <IconWithTooltip icon={FaCss3} label="CSS3" color="hover:text-blue-400" />
          <IconWithTooltip icon={FaNodeJs} label="Node.js" color="hover:text-green-400" />
          <IconWithTooltip icon={FaReact} label="React" color="hover:text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
