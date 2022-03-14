import React, { useState } from "react";

import styles from "./Query.module.css";

import BlockchainAPI from "../components/blockchain/BlockchainAPI";
import QueryBlockchainInput from "../components/userInput/QueryBlockchainInput";

const QueryScriptAddr = () => {
  const [apiData, setData] = useState([]);

  const addQueryDataHandler = query => {
    console.log('Hello JOBBY');
    console.log(query.addr);
    console.log(query.dHash);
    console.log(query.url);
    const url = query.url
    return url
  };

  function fetchBlockchainData(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
      console.log("Hello POOH")
      console.log(url)
  }
  return (
    <div className={styles.query}>
      <h1>Query Script Address</h1>
      <section>
        <QueryBlockchainInput onQueryData={addQueryDataHandler} />
      </section>
      <React.Fragment>
        <section>
          <button onClick={fetchBlockchainData}>Fetch Data</button>
        </section>
        <section role="dialog">
          <BlockchainAPI apiData={apiData} />
        </section>
      </React.Fragment>
    </div>
  );
};

export default QueryScriptAddr;
