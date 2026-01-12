function GeneralPreview({ username, email, phone }) {
  return (
    <section className="general-info-container">
      <h1>{username}</h1>
      <address>{email}</address>
      <span>{phone}</span>
    </section>
  );
}

export default GeneralPreview;
