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

import "./General.css";

function General() {
  return (
    <div className="general-container">
      <h3>General Info</h3>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone" />
      </div>
    </div>
  );
}

export default General;
