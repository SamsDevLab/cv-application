import "../../styles/ResumePreview.css";
import GeneralPreview from "./section-previews/GeneralPreview";
import EducationPreview from "./section-previews/EducationPreview.jsx";
import ExperiencePreview from "./section-previews/ExperiencePreview.jsx";

function ResumePreview({ general, education, experience }) {
  return (
    <section className="resume-preview">
      <div className="resume">
        <hr className="header-line" />
        <header>
          <GeneralPreview
            name={general.name}
            email={general.email}
            phone={general.phone}
          />
        </header>
        <hr />
        <main>
          <section className="education-container">
            <h2>Education</h2>
            <EducationPreview
              school={education.school}
              location={education.location}
              major={education.major}
              fromDate={education.from}
              toDate={education.to}
            />
          </section>
          <hr />
          <section className="experience-container">
            <h2>Experience</h2>
            <ExperiencePreview
              company={experience.company}
              location={experience.location}
              title={experience.title}
              fromDate={experience.from}
              toDate={experience.to}
              responsibilities={experience.responsibilities}
            />
          </section>
        </main>
      </div>
    </section>
  );
}

export default ResumePreview;
