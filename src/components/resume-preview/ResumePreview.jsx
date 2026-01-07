import "../../styles/ResumePreview.css";
import { useState } from "react";
import { allData } from "../../data";
import GeneralPreview from "./section-previews/GeneralPreview";
import EducationPreview from "./section-previews/EducationPreview.jsx";
import ExperiencePreview from "./section-previews/ExperiencePreview.jsx";

function ResumePreview() {
  const [resumeDataState, setResumeData] = useState(allData);

  /*
  Start here tomorrow (01/07)

  Figure out:
  • How to re-render this using updated allData object.
  • Look into making these containers into components so you can
  simplify this markup
  */

  const generalData = allData.generalData;
  const educationData = allData.educationData;
  const experienceData = allData.experienceData;

  return (
    <section className="resume-preview">
      <div className="resume">
        <hr className="header-line" />
        <header>
          <GeneralPreview
            name={generalData.name}
            email={generalData.email}
            phone={generalData.phone}
          />
        </header>
        <hr />
        <main>
          <section className="education-container">
            <h2>Education</h2>
            <EducationPreview
              school={educationData.school}
              location={educationData.location}
              major={educationData.major}
              fromDate={educationData.from}
              toDate={educationData.to}
            />
          </section>
          <hr />
          <section className="experience-container">
            <h2>Experience</h2>
            <ExperiencePreview
              company={experienceData.company}
              location={experienceData.location}
              title={experienceData.title}
              fromDate={experienceData.from}
              toDate={experienceData.to}
              responsibilities={experienceData.responsibilities}
            />
          </section>
        </main>
      </div>
    </section>
  );
}

export default ResumePreview;
