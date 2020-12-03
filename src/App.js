import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import { NavBar, Portfolio, About, HumanRights } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Under Construction</h1>
      <a href="https://github.com/jduell12">
        <h3>Github</h3>
      </a>
      <br></br>
      <a href="https://www.linkedin.com/in/jessicaduell/">
        <h3>LinkedIn</h3>
      </a>
      <Switch>
        <Route exact path="/humanrights" component={HumanRights} />
        <Route exact path="/">
          <NavBar />
          <About />
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
