import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Setup from './pages/Setup';
import Transactions from './pages/Transactions';
import Minting from './pages/Minting';
import Header from './components/header/Header';

function App() {
  const navbar = {
    header1: 'home', header2: 'setup', header3: 'transactions', header4: 'minting'
  };
  return (
    <div>
      <Header 
        header1={navbar.header1}
        header2={navbar.header2}
        header3={navbar.header3}
        header4={navbar.header4}
      />
        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/setup">
              <Setup />
            </Route>
            <Route path="/transactions">
              <Transactions />
            </Route>
            <Route path="/minting">
              <Minting />
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
