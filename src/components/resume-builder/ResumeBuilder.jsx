import "../../styles/ResumeBuilder.css";
import General from "./user-info-sections/General";
import Education from "./user-info-sections/Education.jsx";
import Experience from "./user-info-sections/Experience";

function ResumeBuilder({ generalStateChangeFn, educationStateChangeFn }) {
  return (
    <section className="resume-builder">
      <h2>SDL's Resume Builder</h2>
      <General changeFn={generalStateChangeFn} />
      <Education changeFn={educationStateChangeFn} />
      <Experience />
    </section>
  );
}

export default ResumeBuilder;
