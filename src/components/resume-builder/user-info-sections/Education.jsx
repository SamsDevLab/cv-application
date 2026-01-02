import "../../../styles/SectionStyles.css";
import FormElement from "./FormElement.jsx";
import DateRangeInput from "./DateRangeInput.jsx";
import ButtonContainer from "./ButtonContainer.jsx";

function Education() {
  return (
    <div className="section-container">
      <h3>Education</h3>
      <FormElement
        inputType="text"
        inputId="school-name"
        inputLabelText="School Name"
        changeFn
      />
      <FormElement
        inputType="text"
        inputId="major"
        inputLabelText="Major"
        changeFn
      />
      <DateRangeInput />
      <ButtonContainer />
    </div>
  );
}

export default Education;
