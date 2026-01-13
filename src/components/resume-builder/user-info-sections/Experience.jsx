import "../../../styles/SectionStyles.css";
import { useState } from "react";
import { experienceData } from "../../../data";
import FormElement from "../elements-and-inputs/FormElement";
import DateRangeInput from "../elements-and-inputs/DateRangeInput";

function Experience({ changeFn, currentExperienceState }) {
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

    changeFn(experienceFormDataState);
    setExperienceFormDataState({
      company: "",
      location: "",
      title: "",
      responsibilities: "",
      from: "",
      to: "",
    });
  };

  const editValues = () => {
    setExperienceFormDataState(currentExperienceState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormElement
        inputType="text"
        inputId="company"
        inputLabelText="Company"
        minLength={1}
        maxLength={40}
        placeholder="CrowdStrike"
        editFn={(event) => handleExperienceFormDataState(event)}
        value={experienceFormDataState.company}
      />
      <FormElement
        inputType="text"
        inputId="location"
        inputLabelText="Location"
        minLength={1}
        maxLength={40}
        editFn={(event) => handleExperienceFormDataState(event)}
        value={experienceFormDataState.location}
      />
      <FormElement
        inputType="text"
        inputId="title"
        inputLabelText="Title"
        minLength={1}
        maxLength={40}
        editFn={(event) => handleExperienceFormDataState(event)}
        value={experienceFormDataState.title}
      />
      <FormElement
        inputType="textarea"
        inputId="responsibilities"
        inputLabelText="Responsibilities"
        minLength={1}
        editFn={(event) => handleExperienceFormDataState(event)}
        value={experienceFormDataState.responsibilities}
      />
      <DateRangeInput
        changeFromDateFn={(event) => handleExperienceFormDataState(event)}
        changeToDateFn={(event) => handleExperienceFormDataState(event)}
        from={experienceFormDataState.from}
        to={experienceFormDataState.to}
      />
      <div className="button-container">
        {" "}
        <button type="submit">Submit</button>
        <button type="button" onClick={() => editValues()}>
          Edit
        </button>
        <button className="delete-button" type="button">
          Delete
        </button>
      </div>
    </form>
  );
}

export default Experience;
