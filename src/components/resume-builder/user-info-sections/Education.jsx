import "../../../styles/SectionStyles.css";
import { useState } from "react";
import FormElement from "../elements-and-inputs/FormElement.jsx";
import DateRangeInput from "../elements-and-inputs/DateRangeInput.jsx";

function Education({ educationDataObj, submitFn }) {
  const [educationFormDataState, setEducationFormDataState] =
    useState(educationDataObj);

  const handleEducationFormDataState = (event) => {
    const prop = event.target.id;

    setEducationFormDataState({
      ...educationFormDataState,
      [`${prop}`]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    submitFn(educationFormDataState);

    setEducationFormDataState({
      school: "",
      location: "",
      major: "",
      from: "",
      to: "",
    });
  };

  const editValues = () => {
    setEducationFormDataState(educationDataObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormElement
          inputType="text"
          inputId="school"
          inputLabelText="School Name"
          minLength={1}
          maxLength={40}
          editFn={(event) => handleEducationFormDataState(event)}
          placeholder={educationDataObj.school}
          value={educationFormDataState.school}
        />
      </div>
      <FormElement
        inputType="text"
        inputId="location"
        inputLabelText="Location"
        minLength={1}
        maxLength={40}
        editFn={(event) => handleEducationFormDataState(event)}
        placeholder={educationDataObj.location}
        value={educationFormDataState.location}
      />
      <FormElement
        inputType="text"
        inputId="major"
        inputLabelText="Major"
        minLength={1}
        maxLength={30}
        editFn={(event) => handleEducationFormDataState(event)}
        placeholder={educationDataObj.major}
        value={educationFormDataState.major}
      />
      <DateRangeInput
        changeFromDateFn={(event) => handleEducationFormDataState(event)}
        changeToDateFn={(event) => handleEducationFormDataState(event)}
        from={educationFormDataState.from}
        fromPlaceholder={educationDataObj.from}
        to={educationFormDataState.to}
        toPlaceholder={educationDataObj.to}
      />
      <div className="button-container">
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

export default Education;
