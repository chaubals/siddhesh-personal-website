import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import projectsData from "./projectsData.json";
import Blog from "./Components/Blog";
import Marketplace from "./Components/Marketplace";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/portfolio"
            element={<Portfolio projects={projectsData} />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
