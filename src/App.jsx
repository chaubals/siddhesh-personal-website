import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./CSS/App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import projectsData from "./projectsData.json";
import Blog from "./Components/Blog";
import Marketplace from "./Components/Marketplace";
import { Helmet } from "react-helmet";

function App() {
  return (
    // Router should wrap the entire application
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Siddhesh - Home</title>
              </Helmet>
              <Homepage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>Siddhesh - About</title>
              </Helmet>
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Siddhesh - Contact</title>
              </Helmet>
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Helmet>
                <title>Siddhesh - Portfolio</title>
              </Helmet>
              <Portfolio projects={projectsData} />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Helmet>
                <title>Siddhesh - Blog</title>
              </Helmet>
              <Blog />
            </>
          }
        />
        <Route
          path="/marketplace"
          element={
            <>
              <Helmet>
                <title>Siddhesh - Marketplace</title>
              </Helmet>
              <Marketplace />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
