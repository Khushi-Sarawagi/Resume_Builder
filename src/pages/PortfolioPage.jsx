import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";

function PortfolioPage() {
  const [data, setData] = useState(null);
  const pdfRef = useRef();

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

  if (!data) return <p style={{padding:"20px"}}>No portfolio data found. Please fill out the form first.</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <button className="btn btn-outline btn-warning" onClick={handleDownloadPDF} style={{ float: "right", marginBottom: "1rem" }}>
        📄 Download PDF
      </button>

      <motion.div
        ref={pdfRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section style={{ marginBottom: "2rem" , display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h2 style={{color:"black", fontSize:"30px"}}><strong>{data.name}</strong></h2>
          <p>{data.bio}</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{color:"black"}}><strong>Skills</strong></h3>
          <ul>
            {data.skills
              ?.split(",")
              .map((skill, index) => <li key={index}>{skill.trim()}</li>)}
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
        <h3 style={{color:"black"}}><strong>Social Links</strong></h3>
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
        </section>

        {data.sections?.length > 0 && (
          <section>
            
            {data.sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: "2rem" }}>
                <h4><strong>{section.title}</strong></h4>
                <p>{section.content}</p>
               
              </div>
            ))}
          </section>
        )}
      </motion.div>

      <p style={{display:"flex", justifyContent:"center", fontSize:"20px", marginTop:"50px", color:"red"}}>Please download in the LIGHT mode!</p>
    </div>
  );
}

export default PortfolioPage;