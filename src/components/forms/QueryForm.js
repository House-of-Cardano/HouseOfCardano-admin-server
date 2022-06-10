import React, { useState } from "react";

import "./QueryForm.css";

const QueryForm = (props) => {
  const [enteredAddr, setEnteredAddr] = useState("");
  const [enteredDhash, setEnteredDhash] = useState("");

  const addrChangeHandler = (event) => {
    setEnteredAddr(event.target.value);
  };

  const dHashChangeHandler = (event) => {
    setEnteredDhash(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const queryData = {
      addr: enteredAddr,
      dHash: enteredDhash,
      url: `http://167.86.98.239:8000/query/cardano-explorer-queryScriptAddr?addr=${enteredAddr}&datumHash=${enteredDhash}`
    };
    props.onSaveQueryData(queryData);
    setEnteredAddr("");
    setEnteredDhash("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Script address</label>
          <input type="text" value={enteredAddr} onChange={addrChangeHandler} />
          <label>Datum hash</label>
          <input
            type="text"
            value={enteredDhash}
            onChange={dHashChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">View Data</button>
        <button type="submit">Control Data</button>
        <button type="submit">Initiate Transfer</button>
      </div>
    </form>
  );
};

export default QueryForm;
