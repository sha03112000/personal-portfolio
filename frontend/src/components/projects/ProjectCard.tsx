import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 px-4  rounded-lg  gap-6 shadow-lg">
      {/* Left Section (Text) */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="bg-black/50 p-4 rounded-lg text-sm leading-relaxed">
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-blue-300 hover:text-blue-400"
          >
            <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full rounded-md shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
