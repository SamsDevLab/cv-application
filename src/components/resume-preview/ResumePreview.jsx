import "../../styles/ResumePreview.css";
import Resume from "./Resume";
import { allData } from "../../data";

function ResumePreview() {
  return (
    <section className="resume-preview">
      <Resume props={allData} />
    </section>
  );
}

export default ResumePreview;
