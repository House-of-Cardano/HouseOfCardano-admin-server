import { Link } from "react-router-dom";

import styles from "./Transactions.module.css";

function Transactions() {
  return (
    <div className={styles.transactions}>
      <h1>The Transactions Page</h1>
      <div>
        <Link to="/transactions/queryscriptaddr">
          <p>query script address</p>
        </Link>
        <Link to="/calculatetransactionparamtres">
          <p>calculate transaction paramtres</p>
        </Link>
        <Link to="/transfertransactions">
          <p>transfer transactions</p>
        </Link>
        <Link to="/queryaddresses">
          <p>query addresses</p>
        </Link>
        <Link to="/transfertowinningaddresses">
          <p>transfer to winning addresses</p>
        </Link>
      </div>
    </div>
  );
}

export default Transactions;
