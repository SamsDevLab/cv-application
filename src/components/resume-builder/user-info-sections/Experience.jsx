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

  const handleSubmit = (event) => {
    event.preventDefault();

    submitFn(experienceFormDataState);

    setExperienceFormDataState({
      company: "",
      location: "",
      title: "",
      from: "",
      to: "",
      responsibilities: "",
    });
  };

  const editValues = () => {
    setExperienceFormDataState(experienceDataObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormElement
        inputType="text"
        inputId="company"
        inputLabelText="Company"
        minLength={1}
        maxLength={40}
        editFn={(event) => handleExperienceFormDataState(event)}
        placeholder={experienceDataObj.company}
        value={experienceFormDataState.company}
      />
      <FormElement
        inputType="text"
        inputId="location"
        inputLabelText="Location"
        minLength={1}
        maxLength={40}
        editFn={(event) => handleExperienceFormDataState(event)}
        placeholder={experienceDataObj.location}
        value={experienceFormDataState.location}
      />
      <FormElement
        inputType="text"
        inputId="title"
        inputLabelText="Title"
        minLength={1}
        maxLength={40}
        editFn={(event) => handleExperienceFormDataState(event)}
        placeholder={experienceDataObj.title}
        value={experienceFormDataState.title}
      />
      <FormElement
        inputType="textarea"
        inputId="responsibilities"
        inputLabelText="Responsibilities"
        minLength={1}
        editFn={(event) => handleExperienceFormDataState(event)}
        placeholder={experienceDataObj.responsibilities}
        value={experienceFormDataState.responsibilities}
      />
      <DateRangeInput
        changeFromDateFn={(event) => handleExperienceFormDataState(event)}
        changeToDateFn={(event) => handleExperienceFormDataState(event)}
        from={experienceFormDataState.from}
        fromPlaceholder={experienceDataObj.from}
        to={experienceFormDataState.to}
        toPlaceholder={experienceDataObj.to}
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
