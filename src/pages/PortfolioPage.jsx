import { useEffect, useState } from "react";

function PortfolioPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("portfolioData"));
    if (savedData) setData(savedData);
  }, []);

  if (!data) return <p>No portfolio data found. Please fill out the form first.</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <section>
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Skills</h3>
        <ul>
          {data.skills
            ?.split(",")
            .map((skill, index) => <li key={index}>{skill.trim()}</li>)}
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
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
      </section>
    </div>
  );
}

export default PortfolioPage;