import React from "react";
import ProjectCard from "./ProjectCard";
import "../CSS/Portfolio.css"; // Importing custom styles
import ResumeDownload from "./ResumeDownload";

function Portfolio({ projects }) {
  return (
    <div className="portfolio-container py-3 bg-body-secondary">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Projects</h1>
        <p className="lead text-muted fw-bold">
          Here are some of the projects I’ve worked on
        </p>
      </div>

      {/* Download resume */}
      <ResumeDownload />

      <div className="row justify-content-center">
        <div className="project-cards-container col-12 col-md-10 col-lg-8">
          {projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Download resume */}
      <ResumeDownload />
    </div>
  );
}

export default Portfolio;
