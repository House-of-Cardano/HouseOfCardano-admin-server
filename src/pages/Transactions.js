import { Route, Switch } from "react-router-dom";

import TransactionsEnabler from "../components/transactions/Transactions";
import styles from "./Transactions.module.css";

import QueryScriptAddr from "./QueryScriptAddr";

function Transactions() {
  return (
    <div className={styles.transactions}>
      <h1>The Transactions Page</h1>
      <TransactionsEnabler></TransactionsEnabler>
      <Switch>
        <Route path="/transactions/queryscriptaddr">
          <QueryScriptAddr />
        </Route>
      </Switch>
    </div>
  );
}

export default Transactions;
