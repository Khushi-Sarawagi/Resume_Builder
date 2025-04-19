import { useState } from "react";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    github: "",
    linkedin: "",
    sections: [], // new field for dynamic sections
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = value;
    setFormData({ ...formData, sections: updatedSections });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { title: "", content: "", image: "" }],
    });
  };

  const removeSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: updatedSections });
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

        <h3>Custom Sections</h3>
        {formData.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc" }}>
            <label>
              Section Title:
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleSectionChange(index, "title", e.target.value)}
              />
            </label>
            <br />
            <label>
              Content:
              <textarea
                value={section.content}
                onChange={(e) => handleSectionChange(index, "content", e.target.value)}
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                value={section.image}
                onChange={(e) => handleSectionChange(index, "image", e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={() => removeSection(index)}>Remove Section</button>
          </div>
        ))}

        <button type="button" onClick={addSection}>+ Add Section</button>
        <br /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default FormPage;