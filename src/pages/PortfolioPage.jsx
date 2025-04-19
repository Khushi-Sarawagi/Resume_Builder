import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";

function PortfolioPage() {
  const [data, setData] = useState(null);
  const pdfRef = useRef(); // to reference the portfolio content

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (savedData) setData(savedData);
  }, []);

  const handleDownloadPDF = () => {
    const opt = {
      margin: 0.5,
      filename: `${data.name.replace(/\s+/g, "_")}_portfolio.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(pdfRef.current).save();
  };

  if (!data) return <p>No portfolio data found. Please fill out the form first.</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <button onClick={handleDownloadPDF} style={{ float: "right", marginBottom: "1rem" }}>
        📄 Download PDF
      </button>

      <motion.div
        ref={pdfRef}
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
    </div>
  );
}

export default PortfolioPage;