import "../../../styles/SectionStyles.css";
import { generalData } from "../../../data";
import { useState } from "react";
import FormElement from "./FormElement.jsx";
import ButtonContainer from "./ButtonContainer.jsx";

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
      <FormElement
        inputType="text"
        inputId="name"
        inputLabelText="Name"
        changeFn={(event) => handleNameChange(event)}
      />
      <FormElement
        inputType="email"
        inputId="email"
        inputLabelText="Email"
        changeFn={(event) => handleEmailChange(event)}
      />
      <FormElement
        inputType="text"
        inputId="phone"
        inputLabelText="Phone"
        changeFn={(event) => handlePhoneChange(event)}
      />
      <ButtonContainer />
    </div>
  );
}

export default General;
