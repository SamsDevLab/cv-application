/*
Experience Component Requirements: 
• Company Name
• Title / Position
• Responsibilities
• Dates worked at the company

• Add Button
• Delete Button
• Edit Button (to change info)
• Submit Button (to update info)
*/

import "../../../styles/SectionStyles.css";

function Experience() {
  return (
    <div className="section-container">
      <h2>Experience</h2>
      <div className="input-container">
        <label htmlFor="company-name">Company Name: </label>
        <input type="text" id="company-name" />
      </div>
      <div className="input-container">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" />
      </div>
      <div className="input-container">
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea type="text" id="responsibilities" />
      </div>
      <div className="input-container">
        <label htmlFor="dates">Dates Employed: </label>
        <input type="text" id="dates" />
      </div>
      <div className="button-container">
        <button>Edit</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Experience;
