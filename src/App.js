import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Setup from './pages/Setup';
import Transactions from './pages/Transactions';
import Minting from './pages/Minting';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home' />
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
