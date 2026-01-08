function FormElement({
  inputType,
  inputId,
  inputLabelText,
  minLength,
  maxLength,
  placeholder,
  changeFn,
}) {
  return (
    <div className="input-container">
      <label htmlFor={inputId}>{inputLabelText}: </label>
      {inputType === "textarea" ? (
        <textarea id={inputId} onChange={changeFn} required></textarea>
      ) : (
        <input
          type={inputType}
          id={inputId}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={changeFn}
          required
        />
      )}
    </div>
  );
}

export default FormElement;
