
import './App.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
          <Route path ="/checkout">
            <h1>Checkout Page</h1>
          </Route>
          <Router path ="/login">
            <h1>login page</h1>
          </Router>
          <Router path ="/login">
            <h1>login page</h1>
          </Router>
          <Route path ="/">
            <h1>Home page!</h1>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
