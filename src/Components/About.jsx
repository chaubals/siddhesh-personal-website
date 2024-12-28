import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-lg p-4 rounded-3">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold">About Me</h2>
              <p className="fs-6 text-muted text-center mb-4">
                Hi, I'm Siddhesh "Sid" Chaubal, a passionate full-stack software
                developer.
              </p>
              <p className="fs-6">
                I am 25 years old and come from a middle-class family in Mumbai,
                India. I am currently pursuing my Master's in Computer
                Engineering at the University of Michigan-Dearborn, with a
                strong focus on web development. My primary interest lies in
                building scalable web applications and continuously improving my
                technical skills.
              </p>
              <p className="fs-6">
                I consider myself a solution-oriented individual. When faced
                with a challenge, I focus on solving the problem rather than
                getting discouraged. If I feel my skills are lacking, I quickly
                learn new concepts and practice until I am equipped to tackle
                the problem head-on.
              </p>
              <p className="fs-6">
                With an entrepreneurial mindset, I plan to leverage my skills to
                create a startup that integrates technology to solve real-world
                problems. I’m always excited to learn, grow, and make an impact.
              </p>
              <div className="text-center mt-4">
                <Link
                  href="#contact"
                  className="btn btn-primary btn-lg px-4 py-2 rounded-pill fw-bold"
                  to="/contact"
                >
                  Get in Touch!!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
