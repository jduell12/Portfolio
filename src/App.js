import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//context
import { AboutContext } from "./context/AboutContext";

//components
import { NavBar, Portfolio, About, HumanRights } from "./components";

function App() {
  const [aboutOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/humanrights">
          <NavBar project={true} />
          <HumanRights />
        </Route>
        <AboutContext.Provider value={{ aboutOpen, setOpen }}>
          <Route exact path="/">
            <NavBar project={false} />
            <About />
            <Portfolio />
          </Route>
        </AboutContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
