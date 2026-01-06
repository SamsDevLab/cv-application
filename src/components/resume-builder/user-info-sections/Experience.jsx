import "../../../styles/SectionStyles.css";
import { experienceData } from "../../../data";
import { useState } from "react";
import FormElement from "./FormElement";
import DateRangeInput from "./DateRangeInput";
import ButtonContainer from "./ButtonContainer";

function Experience() {
  const [experienceState, setExperienceState] = useState(experienceData);

  console.log(experienceState);

  const handleCompanyChange = (event) => {
    setExperienceState({ ...experienceState, company: event.target.value });
  };

  const handleTitleChange = (event) => {
    setExperienceState({ ...experienceState, title: event.target.value });
  };

  const handleResponsibilitiesChange = (event) => {
    setExperienceState({
      ...experienceState,
      responsibilities: event.target.value,
    });
  };

  const handleFromDateChange = (event) => {
    setExperienceState({ ...experienceState, from: event.target.value });
  };

  const handleToDateChange = (event) => {
    setExperienceState({ ...experienceState, to: event.target.value });
  };

  return (
    <div className="section-container">
      <h2>Experience</h2>
      <FormElement
        inputType="text"
        inputId="company-name"
        inputLabelText="Company"
        changeFn={(event) => handleCompanyChange(event)}
      />

      <FormElement
        inputType="text"
        inputId="title"
        inputLabelText="Title"
        changeFn={(event) => handleTitleChange(event)}
      />
      <FormElement
        inputType="textarea"
        inputId="responsibilites"
        inputLabelText="Responsibilities"
        changeFn={(event) => handleResponsibilitiesChange(event)}
      />
      <DateRangeInput
        changeFromDateFn={(event) => handleFromDateChange(event)}
        changeToDateFn={(event) => handleToDateChange(event)}
      />
      <ButtonContainer />
    </div>
  );
}

export default Experience;
