import "../../styles/ResumeBuilder.css";
import General from "./user-info-sections/General";
import Education from "./user-info-sections/Education.jsx";
import Experience from "./user-info-sections/Experience.jsx";

function ResumeBuilder({
  generalState,
  generalSubmitFn,
  educationState,
  addEducation,
  educationSubmitFn,
  experienceState,
  addExperience,
  experienceSubmitFn,
}) {
  // console.log(educationState);
  // console.log(experienceState);
  return (
    <section className="resume-builder">
      <h2>SDL's Resume Builder</h2>
      <section className="component-container general">
        <div className="component-header">
          <h3>General Info</h3>
        </div>
        <General
          submitFn={generalSubmitFn}
          currentGeneralState={generalState}
        />
      </section>
      <section className="component-container education">
        <div className="component-header">
          <h3>Education</h3>
          <div>
            <button className="add-button" onClick={() => addEducation()}>
              Add
            </button>
          </div>
        </div>
        {educationState.map((obj) => (
          <Education
            key={obj.id}
            educationDataObj={obj}
            submitFn={educationSubmitFn}
            currentEducationState={educationState}
          />
        ))}
      </section>
      <section className="component-container experience">
        <div className="component-header">
          <h3>Experience</h3>
          <div>
            <button className="add-button" onClick={() => addExperience()}>
              Add
            </button>
          </div>
        </div>
        {experienceState.map((obj) => (
          <Experience
            key={obj.id}
            experienceDataObj={obj}
            submitFn={experienceSubmitFn}
          />
        ))}
      </section>
    </section>
  );
}

export default ResumeBuilder;
