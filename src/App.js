import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Transactions from "./pages/Transactions";
import Minting from "./pages/Minting";
import QueryScriptAddr from "./pages/QueryScriptAddr";

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
        </Switch>
      </main>
    </div>
  );
}

export default App;
