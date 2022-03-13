import React, { useState } from "react";
import styles from "./Query.module.css";

import BlockchainAPI from "../components/blockchain/BlockchainAPI";

const QueryScriptAddr = () => {
  const [apiData, setData] = useState([]);

  function fetchBlockchainData() {
    fetch("http://167.86.98.239:8000/query/cardano-explorer")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }
  return (
    <div className={styles.query}>
      <h1>Query Script Address</h1>
      <React.Fragment>
        <section>
          <button onClick={fetchBlockchainData}>Fetch Data</button>
        </section>
        <section>
          <BlockchainAPI apiData={apiData} />
        </section>
      </React.Fragment>
    </div>
  );
};

export default QueryScriptAddr;