function DateRangeInput({
  changeFromDateFn,
  changeToDateFn,
  from,
  fromPlaceholder,
  to,
  toPlaceholder,
}) {
  return (
    <div className="input-container">
      <div className="date-container">
        <div className="from-container">
          <label htmlFor="from">From: </label>
          <input
            type="text"
            id="from"
            placeholder={fromPlaceholder}
            onChange={changeFromDateFn}
            value={from}
            required
          />
        </div>
        <div className="to-container">
          <label htmlFor="to">To: </label>
          <input
            type="text"
            id="to"
            placeholder={toPlaceholder}
            onChange={changeToDateFn}
            value={to}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangeInput;
