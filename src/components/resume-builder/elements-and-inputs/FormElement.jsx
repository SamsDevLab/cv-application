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
        <textarea
          id={inputId}
          onChange={changeFn}
          placeholder={placeholder}
          required
        ></textarea>
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
