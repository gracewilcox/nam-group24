import logo from './logo.svg';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Account from './components/Account';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import './App.css';

function App() {
    return (
      <Router>
            <div className="App">
              <h>
                This is our banking app
              </h>
              <Account/>
            </div>
            <Route path="/" exact component={SignIn} />
            <Route path="/home" component={App} />
        </Router>
  );
}

export default App;
