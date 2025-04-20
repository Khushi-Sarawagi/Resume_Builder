import { useEffect, useState } from "react";
import "./PreviewPage.css"; 

function PreviewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (savedData) setData(savedData);
  }, []);

  if (!data) return <p style={{padding:"20px"}}>No data found. Please fill out the form first.</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2 className="previewhead">Preview</h2>
      <p><strong style={{marginRight:"1px"}}>Name:</strong> {data.name}</p>
      <p><strong style={{marginRight:"1px"}}>Bio:</strong> {data.bio}</p>
      <p><strong style={{marginRight:"1px"}}>Skills:</strong> {data.skills}</p>
      <p><strong style={{marginRight:"1px"}}>GitHub:</strong> <a href={data.github}>{data.github}</a></p>
      <p><strong style={{marginRight:"1px"}}>LinkedIn:</strong> <a href={data.linkedin}>{data.linkedin}</a></p>

      {data.sections?.length > 0 && (
        <>
        
          {data.sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: "2rem", borderTop: "1px solid #444", paddingTop: "1rem" }}>
              <h4><strong>{section.title}</strong></h4>
              <p>{section.content}</p>
              {section.image && (
                <img
                  src={section.image}
                  alt={`Section ${idx + 1}`}
                  style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px" }}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PreviewPage;