import "../../styles/ResumePreview.css";
import { allData } from "../../data";

function ResumePreview() {
  const generalData = allData.generalData;
  const educationData = allData.educationData;
  const experienceData = allData.experienceData;

  return (
    <section className="resume-preview">
      <div className="resume">
        <hr className="header-line" />
        <header>
          <section className="general-info-container">
            <h1>{generalData.name}</h1>
            <address>{generalData.email}</address>
            <span>{generalData.phone}</span>
          </section>
        </header>
        <hr />
        <main>
          <section className="education-container">
            <h2>Education</h2>
            <div className="details-container">
              <p>{educationData.school}</p>
              <p>{educationData.location}</p>
            </div>
            <div className="details-container secondary">
              <p>{educationData.major}</p>
              <p>
                {educationData.from} – {educationData.to}
              </p>
            </div>
          </section>
          <hr />
          <section className="experience-container">
            <h2>Experience</h2>
            <div className="details-container">
              <p>{experienceData.company}</p>
              <p>{experienceData.location}</p>
            </div>
            <div className="details-container secondary">
              <p>{experienceData.title}</p>
              <p>
                {experienceData.from} – {experienceData.to}
              </p>
            </div>
            <p>{experienceData.responsibilities}</p>
          </section>
        </main>
      </div>
    </section>
  );
}

export default ResumePreview;
