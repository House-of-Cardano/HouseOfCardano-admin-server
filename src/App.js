import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import HashFunction from "./pages/HashFunction"
import Setup from "./pages/Setup";
import Transactions from "./pages/Transactions";
import Minting from "./pages/Minting";
import QueryScriptAddr from "./pages/QueryScriptAddr";
import Transfer from "./pages/Transfer";
import CalculateParameters from "./pages/CalculateParameters";
import QueryAddresses from "./pages/QueryAddresses";
import TransferWinners from "./pages/TransferWinners";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/hashfunction">
            <HashFunction />
          </Route>
          <Route path="/setup">
            <Setup />
          </Route>
          <Route path="/transactions" exact>
            <Transactions />
          </Route>
          <Route path="/minting">
            <Minting />
          </Route>
          <Route path="/transactions/queryscriptaddr">
            <QueryScriptAddr />
          </Route>
          <Route path="/transactions/calculatetransactionparameters">
            <CalculateParameters />
          </Route>
          <Route path="/transactions/transfer">
            <Transfer />
          </Route>
          <Route path="/transactions/queryaddresses">
            <QueryAddresses />
          </Route>
          <Route path="/transactions/transfertowinningaddresses">
            <TransferWinners />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
