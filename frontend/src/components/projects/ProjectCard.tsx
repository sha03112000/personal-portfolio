import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, index }) => {
  const isEven = index % 2 === 1; // 0-based: 0=same, 1=opposite, etc.

  return (
    <div
      className={`
        flex flex-col md:flex-row py-5 px-5 md:px-10 gap-6 relative
        ${isEven ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Title */}
      <div className={`flex-1 items-center ${isEven ? "md:text-right" : "md:text-left"}`}>
        <h3 className="text-xl font-bold">{index + 1}  {title}</h3>
      </div>

      {/* Transparent Black Div */}
      <div className="flex-1 hidden md:block">
        <div className="bg-black/50 w-full h-80 shadow-md flex items-center justify-center text-white">
          Empty Transparent Div
        </div>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className={`
          w-full md:w-150 object-cover shadow-md
          md:absolute md:top-10
          ${isEven ? "md:left-10" : "md:right-10"}  /* 👈 flip position */
        `}
      />

      {/* Description Box */}
      <div
        className={`
          bg-black/50 p-4 rounded-lg text-sm leading-relaxed
          w-full md:w-180 mt-3
          md:absolute md:bottom-23 md:mt-0
          ${isEven ? "md:right-10" : "md:left-10"} /* 👈 flip position */
        `}
      >
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
  );
};

export default ProjectCard;
