import "./App.css";
import { useState } from "react";
import { generalData } from "./data.js";
import { educationData } from "./data.js";
import { experienceData } from "./data.js";
import ResumeBuilder from "./components/resume-builder/ResumeBuilder.jsx";
import ResumePreview from "./components/resume-preview/ResumePreview.jsx";

function App() {
  const [generalState, setGeneralState] = useState(generalData);
  const [educationState, setEducationState] = useState(educationData);
  const [experienceState, setExperienceState] = useState(experienceData);

  const handleGeneralStateChange = (formData) => {
    setGeneralState(formData);
  };

  return (
    <>
      <main className="app">
        <ResumeBuilder generalStateChangeFn={handleGeneralStateChange} />
        <ResumePreview
          general={generalState}
          education={educationState}
          experience={experienceData}
        />
      </main>
    </>
  );
}

export default App;
