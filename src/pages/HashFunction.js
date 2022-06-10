import React, { useState } from "react";

import styles from "./Query.module.css";

import BlockchainAPI from "../components/blockchain/BlockchainAPI";
import HashFunctionInput from "../components/hashInput/HashFunctionInput";

const HashFunction = () => {
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

    return (
      <div className={styles.query}>
        <h1>Calculate Hash</h1>
        <section>
          <HashFunctionInput onQueryData={addQueryDataHandler} />
        </section>
        <React.Fragment>
          <section role="dialog">
            <BlockchainAPI apiData={apiData} />
          </section>
        </React.Fragment>
      </div>
    );
  };
  
  export default HashFunction;