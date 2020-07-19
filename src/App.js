import React from 'react';
import {Route} from 'react-router-dom';

//context

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path = "/Portfolio" component={Portfolio} />
      <Route exact path = "/Resume" component={Resume} />
      <Route exact path = "/Contact" component={Contact} />
      <Route exact path = "/" component={Home} />
    </div>
  );
}

export default App;
