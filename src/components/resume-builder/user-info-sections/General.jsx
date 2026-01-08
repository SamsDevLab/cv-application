import "../../../styles/SectionStyles.css";
import { useState } from "react";
import { generalData } from "../../../data";
import FormElement from "../elements-and-inputs/FormElement.jsx";

function General({ changeFn }) {
  const [formDataState, setFormDataState] = useState(generalData);

  const handleFormDataState = (event) => {
    const prop = event.target.id;

    setFormDataState({ ...formDataState, [`${prop}`]: event.target.value });
  };

  return (
    <div className="section-container">
      <h3>General Info</h3>
      <FormElement
        inputType="text"
        inputId="name"
        inputLabelText="Name"
        changeFn={(event) => handleFormDataState(event)}
      />
      <FormElement
        inputType="email"
        inputId="email"
        inputLabelText="Email"
        changeFn={(event) => handleFormDataState(event)}
      />
      <FormElement
        inputType="text"
        inputId="phone"
        inputLabelText="Phone"
        changeFn={(event) => handleFormDataState(event)}
      />
      <div className="button-container">
        <button type="submit" onClick={() => changeFn(formDataState)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default General;
