import { useState, useEffect } from "react";
import "./App.css";

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
    <div className="app">
      <header>
        <h1>Portfolio Builder</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
    </div>
  );
}

export default App;