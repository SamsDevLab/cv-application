import "../../styles/ResumeBuilder.css";
import General from "./user-info-sections/General";
import Education from "./user-info-sections/Education.jsx";
import Experience from "./user-info-sections/Experience";

function ResumeBuilder({
  generalStateChangeFn,
  educationStateChangeFn,
  experienceStateChangeFn,
  generalState,
  educationState,
  experienceState,
}) {
  return (
    <section className="resume-builder">
      <h2>SDL's Resume Builder</h2>
      <section className="component-container general">
        <div className="component-header">
          <h3>General Info</h3>
        </div>
        <General
          changeFn={generalStateChangeFn}
          currentGenState={generalState}
        />
      </section>
      <section className="component-container education">
        <div className="component-header">
          <h3>Education</h3>
          <div>
            <button className="add-button">Add</button>
          </div>
        </div>
        <Education
          changeFn={educationStateChangeFn}
          currentEducationState={educationState}
        />
      </section>
      <section className="component-container experience">
        <div className="component-header">
          <h3>Experience</h3>
          <div>
            <button className="add-button">Add</button>
          </div>
        </div>
        <Experience
          changeFn={experienceStateChangeFn}
          currentExperienceState={experienceState}
        />
      </section>
    </section>
  );
}

export default ResumeBuilder;
