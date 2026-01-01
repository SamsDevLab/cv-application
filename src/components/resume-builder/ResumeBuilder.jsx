import "./ResumeBuilder.css";
import General from "./user-info-sections/General";
import Education from "./user-info-sections/Education";
import Experience from "./user-info-sections/Experience";

function ResumeBuilder() {
  return (
    <section className="resume-builder">
      <h2>SDL's Resume Builder</h2>
      <General />
      <Education />
      <Experience />
    </section>
  );
}

export default ResumeBuilder;
