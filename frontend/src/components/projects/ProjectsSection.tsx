import React from "react";
import ProjectCard from "./ProjectCard";
import PhoneImage from "/assets/phoneImg.jpg"; // your image

const Projects: React.FC = () => {
  return (
    <section className="px-6 text-white py-10" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Works</h2>
      
      <div className="space-y-10">
        <ProjectCard
          title="Project 1"
          description="Self-driven learner with a proven ability to quickly master new tools and frameworks, solve complex problems, and deliver clean, maintainable code. Experienced in developing RESTful APIs."
          image={PhoneImage}
          link="https://example.com"
        />
        <ProjectCard
          title="Project 1"
          description="Self-driven learner with a proven ability to quickly master new tools and frameworks, solve complex problems, and deliver clean, maintainable code. Experienced in developing RESTful APIs."
          image={PhoneImage}
          link="https://example.com"
        />
      </div>
    </section>
  );
};

export default Projects;
