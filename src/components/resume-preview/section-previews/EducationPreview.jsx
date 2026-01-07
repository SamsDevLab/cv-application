function EducationPreview({ school, location, major, fromDate, toDate }) {
  return (
    <>
      <div className="details-container">
        <p>{school}</p>
        <p>{location}</p>
      </div>
      <div className="details-container secondary">
        <p>{major}</p>
        <p>
          {fromDate} – {toDate}
        </p>
      </div>
    </>
  );
}

export default EducationPreview;
