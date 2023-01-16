import "./App.css";
import TopBar from "./components/TopBar";
import Homepage from "./pages/Homepage";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Staff from "./pages/Staff";
import Resources from "./pages/Resources";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import { UserContext } from "./async/CreateContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <TopBar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;

{
  /* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */
}
