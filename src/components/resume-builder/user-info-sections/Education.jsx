/*
Education Component Requirements:
• School/University
• Major
• Dates attended

• Add Button
• Delete Button
• Edit Button (to change info)
• Submit Button (to update info)
*/

import "../../../styles/SectionStyles.css";

function Education() {
  return (
    <div className="section-container">
      <h3>Education</h3>
      <div className="input-container">
        <label htmlFor="school-name">School Name: </label>
        <input type="text" id="school-name" />
      </div>
      <div className="input-container">
        <label htmlFor="major">Major: </label>
        <input type="text" id="major" />
      </div>
      <div className="input-container">
        <div className="date-container">
          <div className="from-container">
            <label htmlFor="from">From: </label>
            <input type="date" id="from" />
          </div>
          <div className="to-container">
            <label htmlFor="to">To: </label>
            <input type="date" id="to" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button>Edit</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Education;
