import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Siddhesh Chaubal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/marketplace">
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/contact">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
