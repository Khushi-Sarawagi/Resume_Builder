import { useEffect, useState } from "react";

function PreviewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (savedData) setData(savedData);
  }, []);

  if (!data) return <p>No data found. Please fill out the form first.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Live Preview</h2>
      <div>
        <h3>{data.name}</h3>
        <p>{data.bio}</p>
        <p><strong>Skills:</strong> {data.skills}</p>
        <p><strong>GitHub:</strong> <a href={data.github}>{data.github}</a></p>
        <p><strong>LinkedIn:</strong> <a href={data.linkedin}>{data.linkedin}</a></p>
      </div>
    </div>
  );
}

export default PreviewPage;