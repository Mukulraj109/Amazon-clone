
import './App.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom"
import Header from './Header';
import Home from './home';

function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
          <Route path ="/checkout">
          <Header/>
            <h1>Checkout Page</h1>
          </Route>
          <Route path ="/login">
            <h1>login page</h1>
          </Route>
          <Route path ="/login">
            <h1>login page</h1>
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
