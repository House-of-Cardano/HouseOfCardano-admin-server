import React, { useState } from "react";

import styles from "./Query.module.css";

import BlockchainAPI from "../components/blockchain/BlockchainAPI";
import QueryBlockchainInput from "../components/userInput/QueryBlockchainInput";

const QueryScriptAddr = () => {
  const [apiData, setData] = useState([]);

  const addQueryDataHandler = (query) => {
    const url = query.url;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  // const addr = "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc";
  // const datumHash =
  //   "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c";
  return (
    <div className={styles.query}>
      <h1>Query Script Address</h1>
      <section>
        <QueryBlockchainInput onQueryData={addQueryDataHandler} />
      </section>
      <React.Fragment>
        <section role="dialog">
          <BlockchainAPI apiData={apiData} />
        </section>
      </React.Fragment>
    </div>
  );
};

export default QueryScriptAddr;
