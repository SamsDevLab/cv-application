import "../../../styles/SectionStyles.css";
import { educationData } from "../../../data.js";
import { useState } from "react";
import FormElement from "./FormElement.jsx";
import DateRangeInput from "./DateRangeInput.jsx";

function Education() {
  const [educationState, setEducationState] = useState(educationData);

  const handleSchoolChange = (event) => {
    setEducationState({ ...educationState, school: event.target.value });
  };

  const handleMajorChange = (event) => {
    setEducationState({ ...educationState, major: event.target.value });
  };

  const handleFromDateChange = (event) => {
    setEducationState({ ...educationState, from: event.target.value });
  };

  const handleToDateChange = (event) => {
    setEducationState({ ...educationState, to: event.target.value });
  };

  return (
    <div className="section-container">
      <h3>Education</h3>
      <FormElement
        inputType="text"
        inputId="school-name"
        inputLabelText="School Name"
        changeFn={(event) => handleSchoolChange(event)}
      />
      <FormElement
        inputType="text"
        inputId="major"
        inputLabelText="Major"
        changeFn={(event) => handleMajorChange(event)}
      />
      <DateRangeInput
        changeFromDateFn={(event) => handleFromDateChange(event)}
        changeToDateFn={(event) => handleToDateChange(event)}
      />
    </div>
  );
}

export default Education;
