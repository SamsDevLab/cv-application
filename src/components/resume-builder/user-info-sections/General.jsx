import "../../../styles/SectionStyles.css";
import { generalData } from "../../../data";
import { useState } from "react";

/*
Pseudocode: 

• Need to be able to update the values in generalInfo obj in realtime using 
  setGeneralInfo fn
  • Do this by passing in props
*/

function General() {
  const [generalState, setGeneralState] = useState(generalData);

  const handleNameChange = (event) => {
    setGeneralState({ ...generalState, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setGeneralState({ ...generalState, email: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setGeneralState({ ...generalState, phone: event.target.value });
  };

  return (
    <div className="section-container">
      <h3>General Info</h3>
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(event) => handleNameChange(event)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(event) => handleEmailChange(event)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          onChange={(event) => handlePhoneChange(event)}
        />
      </div>
      <div className="button-container">
        <button>Edit</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default General;
