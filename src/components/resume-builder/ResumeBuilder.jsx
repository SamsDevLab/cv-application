import "./ResumeBuilder.css";
import General from "./user-info-sections/general-info/General";
import Education from "./user-info-sections/education-info/Education";
import Experience from "./user-info-sections/experience-info/Experience";

function ResumeBuilder() {
  return (
    <section className="resume-builder">
      <h2>SDL's Resume Builder</h2>
      <main className="main-container">
        <General />
        <Education />
        <Experience />
      </main>
    </section>
  );
}

export default ResumeBuilder;
