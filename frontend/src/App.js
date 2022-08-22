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

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
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
