// import { useState } from "react";
import "./App.css";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder.jsx";
import ResumePreview from "./components/ResumePreview/ResumePreview.jsx";

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
