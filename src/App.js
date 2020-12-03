import React from "react";

//components
import { NavBar, Portfolio, About } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Under Construction</h1>
      <a href="https://github.com/jduell12">
        <h3>Github</h3>
      </a>
      <br></br>
      <a href="https://www.linkedin.com/in/jessicaduell/">
        <h3>LinkedIn</h3>
      </a>
      <About />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
