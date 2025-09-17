import React from "react";
import ProjectCard from "./ProjectCard";
import PhoneImage from "/assets/phoneImg.jpg"; // your image

// Make this an array of objects for better scalability
const projects = [
  { title: "Project 1" },
  { title: "Project 2" },
  { title: "Project 3" },
];

const Projects: React.FC = () => {
  return (
    <section className="px-6 text-white py-10" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Works</h2>

      <div className="space-y-10">
        {projects.map((p, index) => (
          <ProjectCard
            key={index} // ✅ always add a unique key when mapping
            title={p.title}
            description="Self-driven learner with a proven ability to quickly master new tools and frameworks, solve complex problems, and deliver clean, maintainable code. Experienced in developing RESTful APIs."
            image={PhoneImage}
            link="https://example.com"
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
