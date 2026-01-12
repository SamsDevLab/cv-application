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
      <General changeFn={generalStateChangeFn} currentGenState={generalState} />
      <Education
        changeFn={educationStateChangeFn}
        currentEducationState={educationState}
      />
      <Experience
        changeFn={experienceStateChangeFn}
        currentExperienceState={experienceState}
      />
    </section>
  );
}

export default ResumeBuilder;
