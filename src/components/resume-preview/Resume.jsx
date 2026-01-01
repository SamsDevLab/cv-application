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
          <div className="details-container">
            <p>University of Louisville</p>
            <p>Louisville, KY</p>
          </div>
          <div className="details-container secondary">
            <p>BA - English Literature</p>
            <p>2007-2011</p>
          </div>
        </section>
        <hr />
        <section className="experience-container">
          <h2>Experience</h2>
          <div className="details-container">
            <p>CrowdStrike</p>
            <p>Austin, TX</p>
          </div>
          <div className="details-container secondary">
            <p>Software Developer</p>
            <p>November 2023 - July 2024</p>
          </div>
          <p>65+ cold calls a day supporting three different sales reps</p>
        </section>
      </main>
    </div>
  );
}

export default Resume;
