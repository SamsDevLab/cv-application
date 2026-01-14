function FormElement({
  inputType,
  inputId,
  inputLabelText,
  minLength,
  maxLength,
  editFn,
  placeholder,
  value,
}) {
  return (
    <div className="input-container">
      <label htmlFor={inputId}>{inputLabelText}: </label>
      {inputType === "textarea" ? (
        <textarea
          id={inputId}
          onChange={editFn}
          placeholder={placeholder}
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
          placeholder={placeholder}
          value={value}
          required
        />
      )}
    </div>
  );
}

export default FormElement;
