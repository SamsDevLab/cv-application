import "../../../styles/SectionStyles.css";
import { useState } from "react";
import { educationData } from "../../../data.js";
import FormElement from "../elements-and-inputs/FormElement.jsx";
import DateRangeInput from "../elements-and-inputs/DateRangeInput.jsx";

function Education({ changeFn }) {
  const [educationformDataState, setEducationFormDataState] =
    useState(educationData);

  const handleEducationFormDataState = (event) => {
    const prop = event.target.id;

    setEducationFormDataState({
      ...educationformDataState,
      [`${prop}`]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    changeFn(educationformDataState);
  };

  return (
    <div className="section-container">
      <h3>Education</h3>
      <form onSubmit={handleSubmit}>
        <FormElement
          inputType="text"
          inputId="school"
          inputLabelText="School Name"
          changeFn={(event) => handleEducationFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="location"
          inputLabelText="Location"
          changeFn={(event) => handleEducationFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="major"
          inputLabelText="Major"
          changeFn={(event) => handleEducationFormDataState(event)}
        />
        <DateRangeInput
          changeFromDateFn={(event) => handleEducationFormDataState(event)}
          changeToDateFn={(event) => handleEducationFormDataState(event)}
        />
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Education;
