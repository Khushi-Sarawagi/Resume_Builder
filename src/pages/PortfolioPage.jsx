import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PortfolioPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (savedData) setData(savedData);
  }, []);

  if (!data) return <p>No portfolio data found. Please fill out the form first.</p>;

  return (
    <motion.div
      style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
      </motion.section>

      <motion.section
        style={{ marginTop: "2rem" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3>Skills</h3>
        <ul>
          {data.skills
            ?.split(",")
            .map((skill, index) => <li key={index}>{skill.trim()}</li>)}
        </ul>
      </motion.section>

      <motion.section
        style={{ marginTop: "2rem" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3>Social Links</h3>
        {data.github && (
          <p>
            GitHub: <a href={data.github}>{data.github}</a>
          </p>
        )}
        {data.linkedin && (
          <p>
            LinkedIn: <a href={data.linkedin}>{data.linkedin}</a>
          </p>
        )}
      </motion.section>
    </motion.div>
  );
}

export default PortfolioPage;