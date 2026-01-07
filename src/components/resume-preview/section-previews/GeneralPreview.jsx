function GeneralPreview({ name, email, phone }) {
  return (
    <section className="general-info-container">
      <h1>{name}</h1>
      <address>{email}</address>
      <span>{phone}</span>
    </section>
  );
}

export default GeneralPreview;
