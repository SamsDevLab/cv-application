import "../../../styles/SectionStyles.css";
import { useState } from "react";
import { generalData } from "../../../data";
import FormElement from "../elements-and-inputs/FormElement.jsx";

function General({ changeFn, currentGenState }) {
  const [formDataState, setFormDataState] = useState(generalData);

  const handleFormDataState = (event) => {
    const prop = event.target.id;

    setFormDataState({ ...formDataState, [`${prop}`]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeFn(formDataState);

    setFormDataState({ username: "", email: "", phone: "" });
  };

  const editValues = () => {
    setFormDataState(currentGenState);
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
        value={formDataState.username}
      />
      <FormElement
        inputType="email"
        inputId="email"
        inputLabelText="Email"
        minLength={3}
        maxLength={30}
        editFn={(event) => handleFormDataState(event)}
        value={formDataState.email}
      />
      <FormElement
        inputType="tel"
        inputId="phone"
        inputLabelText="Phone"
        minLength={12}
        maxLength={12}
        editFn={(event) => handleFormDataState(event)}
        value={formDataState.phone}
      />
      <div className="button-container">
        <button type="button" onClick={() => editValues()}>
          Edit
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default General;
