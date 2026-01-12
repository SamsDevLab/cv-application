function FormElement({
  inputType,
  inputId,
  inputLabelText,
  minLength,
  maxLength,
  editFn,
  value,
}) {
  return (
    <div className="input-container">
      <label htmlFor={inputId}>{inputLabelText}: </label>
      {inputType === "textarea" ? (
        <textarea
          id={inputId}
          onChange={editFn}
          value={value}
          required
        ></textarea>
      ) : (
        <input
          type={inputType}
          id={inputId}
          minLength={minLength}
          maxLength={maxLength}
          onChange={editFn}
          value={value}
          required
        />
      )}
    </div>
  );
}

export default FormElement;
