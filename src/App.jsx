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

  console.log(experienceState);

  /*********************/
  // General
  /*********************/
  const handleGeneralStateSubmitForm = (formData) => {
    setGeneralState(formData);
  };

  /*********************/
  // Education
  /*********************/
  const addEducationComponent = () => {
    const newEducationComponent = {
      id: crypto.randomUUID(),
      school: "",
      location: "",
      major: "",
      from: "",
      to: "",
    };

    setEducationState([...educationState, newEducationComponent]);
  };

  const handleEducationSubmitForm = (formData) => {
    const updatedArr = educationState.map((object) => {
      if (object.id === formData.id) {
        return {
          ...object,
          school: formData.school,
          location: formData.location,
          major: formData.major,
          from: formData.from,
          to: formData.to,
        };
      }

      return object;
    });

    setEducationState(updatedArr);
  };

  const handleEducationDelete = (currentId) => {
    const updatedArr = [];

    educationState.map((object) => {
      if (object.id !== currentId) {
        updatedArr.push(object);
      }
    });

    setEducationState(updatedArr);
  };

  /*********************/
  // Experience
  /*********************/
  const addExperienceComponent = () => {
    const newExperienceComponent = {
      id: crypto.randomUUID(),
      company: "",
      location: "",
      title: "",
      from: "",
      to: "",
      responsibilities: "",
    };

    setExperienceState([...experienceState, newExperienceComponent]);
  };

  const handleExperienceSubmitForm = (formData) => {
    const updatedArr = experienceState.map((object) => {
      if (object.id === formData.id) {
        return {
          ...object,
          company: formData.company,
          location: formData.location,
          title: formData.title,
          from: formData.from,
          to: formData.to,
          responsibilities: formData.responsibilities,
        };
      }

      return object;
    });

    setExperienceState(updatedArr);
  };

  const handleExperienceDelete = (currentId) => {
    const updatedArr = [];

    experienceState.map((object) => {
      if (object.id !== currentId) {
        updatedArr.push(object);
      }
    });

    setExperienceState(updatedArr);
  };

  return (
    <>
      <main className="app">
        <ResumeBuilder
          generalState={generalState}
          generalSubmitFn={handleGeneralStateSubmitForm}
          educationState={educationState}
          addEducation={addEducationComponent}
          educationSubmitFn={handleEducationSubmitForm}
          educationDelFn={handleEducationDelete}
          experienceState={experienceState}
          addExperience={addExperienceComponent}
          experienceSubmitFn={handleExperienceSubmitForm}
          experienceDelFn={handleExperienceDelete}
        />
        <ResumePreview
          general={generalState}
          education={educationState}
          experience={experienceState}
        />
      </main>
    </>
  );
}

export default App;
