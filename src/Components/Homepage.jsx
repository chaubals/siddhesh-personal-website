import React from "react";
import { Link } from "react-router-dom";
//import "./Homepage.css"; // For custom styles if needed

function Homepage() {
  return (
    <div className="homepage-container">
      {/* Hero Section: Welcome Message */}
      <header className="text-center mt-5">
        <div className="container">
          <h1 className="display-3 fw-bold">Siddhesh R Chaubal</h1>
          <p className="lead mt-3">
            I am a passionate software developer who loves building innovative
            web applications. Explore my portfolio, blog, and learn more about
            what I do.
          </p>

          {/* Image of you */}
          <div className="profile-image-container mt-4">
            <img
              src="/Siddhesh_Picture_Edited.jpg"
              alt="Siddhesh's Photo"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "50%", // Make the image a little smaller for aesthetic purposes
                height: "auto",
              }}
            />
          </div>
        </div>
      </header>

      {/* Professional Summary Section */}
      <section className="text-center mt-5">
        <div className="container">
          <h2 className="fw-bold">About Me</h2>
          <p className="lead mt-3">
            I specialize in full-stack web development, with expertise in
            technologies such as React.js, JavaScript, C#, Python, Git, and AWS
            Services. I enjoy solving problems and delivering user-friendly,
            responsive web applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <div className="container border border-2 rounded-3 bg-light">
        <section className="text-center py-5">
          <div className="container">
            <h2 className="fw-bold">Skills & Technologies</h2>
            <div className="d-flex justify-content-center mt-4">
              <ul className="list-unstyled">
                <li>
                  <strong>Languages:</strong> JavaScript, Python, C# (OOP, DSA,
                  .NET Framework)
                </li>
                <li>
                  <strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, AWS (Lambda, REST APIs,
                  DynamoDB, SQL/No-SQL DB)
                </li>
                <li>
                  <strong>Deployment:</strong> Netlify, AWS Amplify, AWS Elastic
                  Beanstalk, Vercel
                </li>
                <li>
                  <strong>Tools:</strong> Git, Docker, Postman, GitHub, Canva,
                  MS Excel
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Certifications */}
      <div className="container border border-2 rounded-3 p-4 bg-light">
        <section className="text-center">
          <h2 className="fw-bold">Certifications</h2>
          <ul className="list-unstyled">
            <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
            <li>CFA Level I Cleared</li>
            <li>AGILE: SCRUM (in previous organization)</li>
            <li>Certified Trainer: Train-The-Trainer Silver Band Holder</li>
          </ul>
        </section>
      </div>

      {/* Portfolio Preview Section */}
      <div className="container border border-2 rounded-3 p-4 bg-light">
        <section className="text-center mt-5">
          <h2 className="fw-bold">Featured Projects</h2>
          <div className="d-flex justify-content-center mt-4">
            <div className="project-preview-card shadow-sm p-3 mb-5 bg-white rounded">
              <h5 className="fw-bold">Memora</h5>
              <p>
                A flashcard-based tech learning app developed using React and
                AWS
              </p>
              <Link to="/portfolio" className="btn btn-primary">
                See More
              </Link>
            </div>
            <div className="project-preview-card shadow-sm p-3 mb-5 bg-white rounded ms-4">
              <h5 className="fw-bold">CodeQuiz</h5>
              <p>
                Platform for techies to test their knowledge through intuitive
                tech quizzes
              </p>
              <Link to="/portfolio" className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Call-to-Action Section */}
      <section className="text-center mt-5">
        <div className="container">
          <Link to="/portfolio" className="btn btn-lg btn-success me-3 mb-3">
            View Full Portfolio
          </Link>
          <Link to="/contact" className="btn btn-lg btn-primary mb-3">
            Get in touch
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-5 py-3 bg-dark text-white">
        <div className="container">
          <p>&copy; 2024 Siddhesh Chaubal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
