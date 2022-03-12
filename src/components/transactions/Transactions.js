import { NavLink } from "react-router-dom";

import styles from "./Transactions.module.css";

function TransactionsEnabler() {
  return (
    <div className={styles.transactions}>
      <nav>
        <div>
          <NavLink to="/transactions/queryscriptaddr">
            <p>query script address</p>
          </NavLink>
          <NavLink to="/calculatetransactionparamtres">
            <p>calculate transaction paramtres</p>
          </NavLink>
          <NavLink to="/transfertransactions">
            <p>transfer transactions</p>
          </NavLink>
          <NavLink to="/queryaddresses">
            <p>query addresses</p>
          </NavLink>
          <NavLink to="/transfertowinningaddresses">
            <p>transfer to winning addresses</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default TransactionsEnabler;
