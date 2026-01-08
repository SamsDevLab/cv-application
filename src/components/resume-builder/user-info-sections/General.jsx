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

  const handleSubmit = (e) => {
    e.preventDefault();

    changeFn(formDataState);
  };

  return (
    <div className="section-container">
      <h3>General Info</h3>
      <form onSubmit={handleSubmit}>
        <FormElement
          inputType="text"
          inputId="name"
          inputLabelText="Name"
          minLength={1}
          maxLength={20}
          placeholder="Sam"
          changeFn={(event) => handleFormDataState(event)}
        />
        <FormElement
          inputType="email"
          inputId="email"
          inputLabelText="Email"
          minLength={3}
          maxLength={30}
          placeholder="sam@randomemail.com"
          changeFn={(event) => handleFormDataState(event)}
        />
        <FormElement
          inputType="tel"
          inputId="phone"
          inputLabelText="Phone"
          minLength={12}
          maxLength={12}
          placeholder="555-555-5555"
          changeFn={(event) => handleFormDataState(event)}
        />
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default General;
