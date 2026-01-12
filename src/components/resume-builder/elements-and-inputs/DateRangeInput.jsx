function DateRangeInput({ changeFromDateFn, changeToDateFn, from, to }) {
  return (
    <div className="input-container">
      <div className="date-container">
        <div className="from-container">
          <label htmlFor="from">From: </label>
          <input
            type="date"
            id="from"
            onChange={changeFromDateFn}
            value={from}
          />
        </div>
        <div className="to-container">
          <label htmlFor="to">To: </label>
          <input type="date" id="to" onChange={changeToDateFn} value={to} />
        </div>
      </div>
    </div>
  );
}

export default DateRangeInput;
