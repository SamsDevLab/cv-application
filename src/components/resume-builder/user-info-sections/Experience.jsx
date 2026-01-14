import "../../../styles/SectionStyles.css";
import { useState } from "react";
import FormElement from "../elements-and-inputs/FormElement";
import DateRangeInput from "../elements-and-inputs/DateRangeInput";

function Experience({ experienceDataObj, submitFn }) {
  const [experienceFormDataState, setExperienceFormDataState] =
    useState(experienceDataObj);

  const handleExperienceFormDataState = (event) => {
    const prop = event.target.id;

    setExperienceFormDataState({
      ...experienceFormDataState,
      [`${prop}`]: event.target.value,
    });
  };

  const editValues = () => {
    setExperienceFormDataState(experienceFormDataState);
  };

  return (
    <form onSubmit={(event) => submitFn(event, experienceFormDataState)}>
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
