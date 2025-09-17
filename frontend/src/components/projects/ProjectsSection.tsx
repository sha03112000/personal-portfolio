import React from "react";
import ProjectCard from "./ProjectCard";
import PhoneImage from "/assets/phoneImg.jpg"; // your image

// Combined array of project objects
const projects = [
  {
    title: "Corperative Training",
    description:
      "Self-motivated trainer with demonstrated skill in conducting workshops, facilitating group learning, and delivering structured counseling. Adept at helping participants achieve their goals through practical guidance and support.",
    image: PhoneImage,
    link: "https://example.com"
  },
  {
    title: "Tech Educational Website",
    description:
      "Driven professional with proven experience in developing tech educational platforms, designing interactive learning modules, and providing guidance to learners. Skilled in creating engaging, hands-on experiences that enhance understanding and practical skills.",
    image: PhoneImage,
    link: "https://example.com"
  },
  {
    title: "Franchise Expo Registration",
    description:
      "Proactive professional with experience in developing franchise expo websites, integrating seamless registration and secure payment systems. Skilled in creating user-friendly platforms that streamline event management and enhance participant experience.",
    image: PhoneImage,
    link: "https://example.com"
  },

  {
    title: "Home Appliance Service & Staff Management System",
    description:
      "Developed a complete platform for managing home appliance repair and maintenance services. Includes customer request handling, job scheduling, and staff management tools to streamline operations and improve service delivery.",
    image: PhoneImage,
    link: "https://example.com"
  },

  {
    title: "Travel Agency Loyalty Platform",
    description:
      "Innovative solution for travel agencies featuring promotional offers, a lucky draw rewards system, and a points-based loyalty program. Enables customers to collect points and redeem them for discounts on future travel bookings.",
    image: PhoneImage,
    link: "https://example.com"
  },

  {
    title: "Camera & Equipment Rental & Tracking App(Flutter)",
    description:
      "Built a cross-platform mobile solution using Flutter for camera and equipment rentals. Features include inventory tracking, secure booking flow, and admin dashboard for managing rentals and monitoring usage.",
    image: PhoneImage,
    link: "https://example.com"
  }

];

const Projects: React.FC = () => {
  return (
    <section className="px-6 text-white py-10" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Works</h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Unique key for mapping
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
