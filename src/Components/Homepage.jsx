import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage-container">
      {/* Hero Section: Welcome Message */}
      <header className="text-center mt-5">
        <h1 className="display-3 fw-bold">Siddhesh R Chaubal</h1>
        <p className="lead mt-3">
          I am a passionate software developer who loves building innovative web
          applications. Explore my portfolio, blog, and learn more about what I
          do.
        </p>

        {/* Image of you */}
        <div className="profile-image-container mt-4">
          <img
            src="/Siddhesh_Picture_Edited.jpg"
            alt="Siddhesh's Photo"
            className="img-fluid rounded-5"
            style={{
              width: "50%", // Make the image a little smaller for aesthetic purposes
              height: "auto",
            }}
          />
        </div>
      </header>

      {/* Professional Summary Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="lead mt-3">
          I specialize in full-stack web development, with expertise in
          technologies such as React.js, Node.js, and Python. I enjoy solving
          problems and delivering user-friendly, responsive web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">Skills & Technologies</h2>
        <div className="d-flex justify-content-center mt-4">
          <ul className="list-unstyled">
            <li>
              <strong>Languages:</strong> JavaScript, Python, Java
            </li>
            <li>
              <strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, MongoDB, AWS
            </li>
            <li>
              <strong>Tools:</strong> Git, Docker, Postman
            </li>
          </ul>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">Featured Projects</h2>
        <div className="d-flex justify-content-center mt-4">
          <div className="project-preview-card">
            <h5>Memora</h5>
            <p>
              A flashcard-based tech learning app developed using React and AWS
            </p>
            <Link to="/portfolio" className="btn btn-primary">
              See More
            </Link>
          </div>
          <div className="project-preview-card ms-4">
            <h5>CodeQuiz</h5>
            <p>Test your technical knowhow by taking tech quizzes here</p>
            <Link to="/portfolio" className="btn btn-primary">
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center mt-5">
        <Link to="/portfolio" className="btn btn-lg btn-success me-3">
          View My Full Portfolio
        </Link>
        <Link to="/contact" className="btn btn-lg btn-primary">
          Contact Me
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-5 py-3">
        <p>&copy; 2024 Siddhesh Chaubal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
