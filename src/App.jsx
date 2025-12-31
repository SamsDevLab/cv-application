// import { useState } from "react";
import "./App.css";
import ResumeBuilder from "./components/resume-builder/ResumeBuilder.jsx";
import ResumePreview from "./components/resume-preview/ResumePreview.jsx";

function App() {
  return (
    <>
      <main className="app">
        <ResumeBuilder />
        <ResumePreview />
      </main>
    </>
  );
}

export default App;
