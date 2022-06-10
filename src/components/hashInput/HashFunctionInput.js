import React from "react";

import "./HashFunctionInput.css";

import HashFunctionForm from "./forms/HashFunctionForm.js";

const HashFunctionInput = (props) => {

  const saveQueryDataHandler = (enteredQueryData) => {
    const queryData = {
      ...enteredQueryData,
      id: Math.random().toString(),
    };
    props.onQueryData(queryData);
  };

  return (
    <div className="new-expense">
      <HashFunctionForm onSaveQueryData={saveQueryDataHandler} />
    </div>
  );
};

export default HashFunctionInput;
