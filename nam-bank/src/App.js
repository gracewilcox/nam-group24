import { Route, BrowserRouter as Router } from "react-router-dom";
import Account from './components/Account';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import './App.css';

function App() {
    return (

      <div className="App">
        <Router>
            <Route path="/" exact component={SignIn} />
            <Route path="/home" component={Home} />
        </Router>
      </div>
  );
}

export default App;
