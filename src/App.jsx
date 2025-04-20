import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import PreviewPage from "./pages/PreviewPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

// this code checks the local storage for theme preference

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    // this code sets the theme to dark or light based on the user preference 
    <Router> 
      <div className="app">
        <header>
        <h1 className="text-3xl font-bold">Resume Builder</h1>
          <button className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>

        {/* Simple Navigation */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/preview">Preview</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;