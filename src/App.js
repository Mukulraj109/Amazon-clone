
import './App.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom"
import Header from './Header';
import Home from './home';
import Login from './Login';

import Checkout from './Checkout';
function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
          <Route path ="/checkout">
          <Header/>
          <Checkout/>
          </Route>
          <Route path ="/login">
            <h1>login page</h1>
          </Route>
          <Route path ="/login">
          <Login/>
          </Route>
          <Route path ="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
