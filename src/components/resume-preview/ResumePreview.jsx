import "../../styles/ResumePreview.css";
import GeneralPreview from "./section-previews/GeneralPreview";
import EducationPreview from "./section-previews/EducationPreview.jsx";
import ExperiencePreview from "./section-previews/ExperiencePreview.jsx";

function ResumePreview({ general, education, experience }) {
  // console.log(experience);

  return (
    <section className="resume-preview">
      <div className="resume">
        <hr className="header-line" />
        <header>
          <GeneralPreview
            key={general.id}
            username={general.username}
            email={general.email}
            phone={general.phone}
          />
        </header>
        <hr />
        <main>
          <section className="education-container">
            <h2>Education</h2>
            {education.map((obj) => (
              <EducationPreview
                key={obj.id}
                school={obj.school}
                location={obj.location}
                major={obj.major}
                fromDate={obj.from}
                toDate={obj.to}
              />
            ))}
          </section>
          <hr />
          <section className="experience-container">
            <h2>Experience</h2>
            {experience.map((obj) => (
              <ExperiencePreview
                key={obj.id}
                company={obj.company}
                location={obj.location}
                title={obj.title}
                fromDate={obj.from}
                toDate={obj.to}
                responsibilities={obj.responsibilities}
              />
            ))}
          </section>
        </main>
      </div>
    </section>
  );
}

export default ResumePreview;
