import React, { useState } from "react";

import styles from "./Query.module.css";

import BlockchainAPI from "../components/blockchain/BlockchainAPI";
import QueryBlockchainInput from "../components/userInput/QueryBlockchainInput";

const QueryScriptAddr = () => {
  const [apiData, setData] = useState([]);

  function fetchBlockchainData() {
    fetch(
      "http://167.86.98.239:8000/query/cardano-explorer?addr=addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc&datumHash=\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c"
    )
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
      <section>
        <QueryBlockchainInput />
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
