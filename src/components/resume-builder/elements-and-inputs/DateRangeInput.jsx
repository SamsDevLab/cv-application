function DateRangeInput({ changeFromDateFn, changeToDateFn, from, to }) {
  return (
    <div className="input-container">
      <div className="date-container">
        <div className="from-container">
          <label htmlFor="from">From: </label>
          <input
            type="text"
            id="from"
            placeholder="Aug 2007"
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
            placeholder="May 2011"
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
