function ExperiencePreview({
  company,
  location,
  title,
  fromDate,
  toDate,
  responsibilities,
}) {
  return (
    <>
      <div className="details-container">
        <p>{company}</p>
        <p>{location}</p>
      </div>
      <div className="details-container secondary">
        <p>{title}</p>
        <p>
          {fromDate} – {toDate}
        </p>
      </div>
      <p>{responsibilities}</p>
    </>
  );
}

export default ExperiencePreview;
