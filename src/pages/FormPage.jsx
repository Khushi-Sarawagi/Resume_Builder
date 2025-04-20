import { useState } from "react";
import "./FormPage.css"

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
    alert("Form data saved! You can now preview your Resume.");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="formhead">Build Your Resume</h2>
      <div className="divider divider-error"></div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input className="input inside input-primary" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br /><br />
        <div className="divider divider-warning"></div>


        <label>
          Bio:
          <textarea className="textarea inside textarea-primary" name="bio" value={formData.bio} onChange={handleChange} required />
        </label>
        <br /><br />
        <div className="divider divider-warning"></div>


        <label>
          Skills (comma separated):
          <textarea type="text" name="skills" className="textarea inside textarea-primary" value={formData.skills} onChange={handleChange} />
        </label>
        <br /><br />
        <div className="divider divider-warning"></div>



        <label>
          GitHub URL:
          <input name="github" value={formData.github} type="url" className="input inside validator" required placeholder="https://" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$" 
  title="Must be valid URL" onChange={handleChange} />
  <p className="validator-hint">Must be a valid URL</p>
        </label>
        <br /><br />
        <div className="divider divider-warning"></div>




        <label>
          LinkedIn URL:
          <input name="linkedin" value={formData.linkedin} type="url" className="input inside validator" required placeholder="https://" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$" 
  title="Must be valid URL" onChange={handleChange} />
  <p className="validator-hint">Must be valid URL</p>
        </label>
        <br /><br />

        <div className="divider divider-warning"></div>

        <h3>Custom Sections</h3>
        {formData.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc" }}>
            <label>
              Section Title:
              <input
                type="text"
                className="input inside input-primary"
                value={section.title}
                onChange={(e) => handleSectionChange(index, "title", e.target.value)}
              />
            </label>
            <br />
            <label>
              Content:
              <textarea className="textarea inside textarea-primary"
                value={section.content}
                onChange={(e) => handleSectionChange(index, "content", e.target.value)}
              />
            </label>
            <br />
            <div className="divider divider-warning"></div>

            <button type="button" className="btn btn-error" onClick={() => removeSection(index)}>Remove Section</button>
          </div>
        ))}

        <button type="button" className="btn btn-secondary" onClick={addSection}>+ Add Section</button>
        <br /><br />
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default FormPage;