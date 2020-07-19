import React, {useState} from 'react';
import {Route} from 'react-router-dom';

//context
import {NavBarContext} from './contexts/NavBarContext'

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  const initialPage = {
    home: true,
    portfolio: false,
    resume: false,
    contact: false
  }

  const [onPage, setPage] = useState(initialPage);

  return (
    <div className="App">
      <NavBarContext.Provider value={{onPage}}>
        <NavBar />
      </NavBarContext.Provider>
      <Route exact path = "/Portfolio" component={Portfolio} />
      <Route exact path = "/Resume" component={Resume} />
      <Route exact path = "/Contact" component={Contact} />
      <Route exact path = "/" component={Home} />
    </div>
  );
}

export default App;
