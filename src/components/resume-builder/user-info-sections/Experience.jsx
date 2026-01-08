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

  const handleSubmit = (e) => {
    e.preventDefault();

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
          maxLength={20}
          placeholder="CrowdStrike"
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="location"
          inputLabelText="Location"
          minLength={1}
          maxLength={20}
          placeholder="Austin, TX"
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <FormElement
          inputType="text"
          inputId="title"
          inputLabelText="Title"
          minLength={1}
          maxLength={20}
          placeholder="Sales Development Representative"
          changeFn={(event) => handleExperienceFormDataState(event)}
        />
        <FormElement
          inputType="textarea"
          inputId="responsibilities"
          inputLabelText="Responsibilities"
          minLength={1}
          maxLength={20}
          placeholder="• 60+ cold calls a day, generate business for sales reps"
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
