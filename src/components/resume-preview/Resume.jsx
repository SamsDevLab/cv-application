import "../../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <hr class="header-line" />
      <header>
        <section className="general-info-container">
          <h1>Sam's Dev Lab</h1>
          <address>samsdevlab@proton.me</address>
          <span>(555) 555-5555</span>
        </section>
      </header>
      <hr />
      <main>
        <section className="education-container">
          <h2>Education</h2>
          <ul>
            <li>School: University of Louisville</li>
            <li>Major: English Literature</li>
            <li>Years attended: 2007-2011</li>
          </ul>
        </section>
        <hr />
        <section className="experience-container">
          <h2>Experience</h2>
          <ul>
            <li>Company Name: CrowdStrike</li>
            <li>Position Title: Software Developer</li>
            <li>
              Responsibilities: did a bunch of wanking and things while I worked
              here. Didn't hit quota once.
            </li>
            <li>Dates Employed: </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Resume;
