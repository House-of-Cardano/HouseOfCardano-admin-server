import React from "react";

import "./QueryForm.css";

const QueryForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Script address</label>
          <input type="text" />
          <label >Datum hash</label>
          <input type="text" />
        </div>
      </div>
      <div>
          <button type="submit">Add input</button>
      </div>
    </form>
  );
};

export default QueryForm;
