import React from "react";

import "./QueryBlockchainInput.css";

import QueryForm from "../forms/QueryForm.js";

const QueryBlockchainInput = (props) => {

  const saveQueryDataHandler = (enteredQueryData) => {
    const queryData = {
      ...enteredQueryData,
      id: Math.random().toString(),
    };
    props.onQueryData(queryData);
  };

  return (
    <div className="new-expense">
      <QueryForm onSaveQueryData={saveQueryDataHandler} />
    </div>
  );
};

export default QueryBlockchainInput;
