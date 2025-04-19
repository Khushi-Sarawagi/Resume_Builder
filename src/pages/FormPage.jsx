import { useState } from "react";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioData", JSON.stringify(formData));
    alert("Form data saved! You can now preview your portfolio.");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Build Your Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Skills (comma separated):
          <input name="skills" value={formData.skills} onChange={handleChange} />
        </label>
        <br /><br />

        <label>
          GitHub URL:
          <input name="github" value={formData.github} onChange={handleChange} />
        </label>
        <br /><br />

        <label>
          LinkedIn URL:
          <input name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </label>
        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default FormPage;