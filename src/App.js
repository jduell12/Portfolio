import React, {useState} from 'react';
import {Route} from 'react-router-dom';

//context
import {NavBarContext} from './contexts/NavBarContext'

//components
import {Home, NavBar, Contact, Portfolio, Resume} from './components'


function App() {

  const [onPage, setPage] = useState('home');

  return (
    <div className="App">
      <NavBarContext.Provider value={{onPage, setPage}}>
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
