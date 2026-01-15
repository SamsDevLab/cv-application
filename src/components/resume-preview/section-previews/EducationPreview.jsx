function EducationPreview({ school, location, major, fromDate, toDate }) {
  return (
    <div className="all-details-container">
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
    </div>
  );
}

export default EducationPreview;
