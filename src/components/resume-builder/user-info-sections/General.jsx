/*
General Info Component Requirements:
• Name
• Email
• Phone Number

• Add Button
• Delete Button
• Edit Button (to change info)
• Submit Button (to update info)
*/

// Start here tomorrow - keep building out the wireframe with buttons before moving on to another component

import "../../user-info-sections/SectionStyles.css";

function General() {
  return (
    <div className="section-container">
      <h3>General Info</h3>
      <div className="input-container">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone" />
      </div>
      <div className="button-container">
        <button>Edit</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default General;
