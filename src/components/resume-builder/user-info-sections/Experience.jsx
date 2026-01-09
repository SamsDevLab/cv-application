import "../../../styles/SectionStyles.css";
import { useState } from "react";
import { experienceData } from "../../../data";
import FormElement from "../elements-and-inputs/FormElement";
import DateRangeInput from "../elements-and-inputs/DateRangeInput";

function Experience({ changeFn }) {
  const [experienceFormDataState, setExperienceFormDataState] =
    useState(experienceData);

  const handleExperienceFormDataState = (event) => {
    const prop = event.target.id;

    setExperienceFormDataState({
      ...experienceFormDataState,
      [`${prop}`]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();

    changeFn(experienceFormDataState);
  };

  return (
    <div className="section-container">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        <FormElement
          inputType="text"
          inputId="company"
          inputLabelText="Company"
          minLength={1}
          maxLength={40}
          placeholder="CrowdStrike"
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="location"
          inputLabelText="Location"
          minLength={1}
          maxLength={40}
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="title"
          inputLabelText="Title"
          minLength={1}
          maxLength={40}
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <FormElement
          inputType="textarea"
          inputId="responsibilities"
          inputLabelText="Responsibilities"
          minLength={1}
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <DateRangeInput
          changeFromDateFn={(event) => handleExperienceFormDataState(event)}
          changeToDateFn={(event) => handleExperienceFormDataState(event)}
        />
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Experience;
