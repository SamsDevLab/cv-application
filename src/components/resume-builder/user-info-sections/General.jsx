import "../../../styles/SectionStyles.css";
import { useState } from "react";
import FormElement from "../elements-and-inputs/FormElement.jsx";

function General({ submitFn, currentGeneralState }) {
  const [formDataState, setFormDataState] = useState("");

  const handleFormDataState = (event) => {
    const prop = event.target.id;

    setFormDataState({ ...formDataState, [`${prop}`]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFn(formDataState);

    setFormDataState({ username: "", email: "", phone: "" });
  };

  const editFormValues = () => {
    setFormDataState(currentGeneralState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormElement
        inputType="text"
        inputId="username"
        inputLabelText="Name"
        minLength={1}
        maxLength={20}
        editFn={(event) => handleFormDataState(event)}
        placeholder={currentGeneralState.username}
        value={formDataState.username}
      />
      <FormElement
        inputType="email"
        inputId="email"
        inputLabelText="Email"
        minLength={3}
        maxLength={30}
        editFn={(event) => handleFormDataState(event)}
        placeholder={currentGeneralState.email}
        value={formDataState.email}
      />
      <FormElement
        inputType="tel"
        inputId="phone"
        inputLabelText="Phone"
        minLength={12}
        maxLength={12}
        editFn={(event) => handleFormDataState(event)}
        placeholder={currentGeneralState.phone}
        value={formDataState.phone}
      />
      <div className="button-container">
        <div className="submit-and-edit-container">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => editFormValues()}>
            Edit
          </button>
        </div>
      </div>
    </form>
  );
}

export default General;
