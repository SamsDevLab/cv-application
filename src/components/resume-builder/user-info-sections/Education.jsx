import "../../../styles/SectionStyles.css";
import { useState } from "react";
import { educationData } from "../../../data.js";
import FormElement from "../elements-and-inputs/FormElement.jsx";
import DateRangeInput from "../elements-and-inputs/DateRangeInput.jsx";

function Education({ changeFn }) {
  const [educationFormDataState, setEducationFormDataState] =
    useState(educationData);

  const handleEducationFormDataState = (event) => {
    const prop = event.target.id;

    setEducationFormDataState({
      ...educationFormDataState,
      [`${prop}`]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    changeFn(educationFormDataState);
  };

  return (
    <div className="section-container">
      <h3>Education</h3>
      <form onSubmit={handleSubmit}>
        <FormElement
          inputType="text"
          inputId="school"
          inputLabelText="School Name"
          minLength={1}
          maxLength={40}
          changeFn={(event) => handleEducationFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="location"
          inputLabelText="Location"
          minLength={1}
          maxLength={40}
          changeFn={(event) => handleEducationFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="major"
          inputLabelText="Major"
          minLength={1}
          maxLength={30}
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
