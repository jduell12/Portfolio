import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

//context
import {NavBarContext} from './contexts/NavBarContext'

//components
import {
  Home, NavBar, Contact, Portfolio, Resume
} from './components'


function App() {

  const [onPage, setPage] = useState('home');

  return (
    <div className="App">
      <NavBarContext.Provider value={{onPage, setPage}}>
        <NavBar />
      </NavBarContext.Provider>
      <Switch>
        <Route exact path = "/Portfolio" component={Portfolio} />
        <Route exact path = "/Contact" component={Contact} />
        <Route exact path = "/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
