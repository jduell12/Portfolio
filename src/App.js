import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import { NavBar, Portfolio, About, HumanRights } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/humanrights">
          <NavBar project={true} />
          <HumanRights />
        </Route>
        <Route exact path="/">
          <NavBar project={false} />
          <About />
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
