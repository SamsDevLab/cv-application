function FormElement({ inputType, inputId, inputLabelText, changeFn }) {
  return (
    <div className="input-container">
      <label htmlFor={inputId}>{inputLabelText}: </label>
      {inputType === "textarea" ? (
        <textarea id={inputId} onChange={changeFn}></textarea>
      ) : (
        <input type={inputType} id={inputId} onChange={changeFn} />
      )}
    </div>
  );
}

export default FormElement;
