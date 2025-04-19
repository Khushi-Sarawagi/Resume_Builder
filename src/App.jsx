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

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Portfolio Builder</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>

        {/* Simple Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/form">Form</Link> |{" "}
          <Link to="/preview">Preview</Link> |{" "}
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