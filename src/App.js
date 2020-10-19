import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layaut from './components/Layaut';
import Characters from './pages/Characters.jsx';
import Locations from './pages/Locations.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  return (
      <BrowserRouter>
        <Layaut/>
        <Switch>
          <Route exact path="/" component={ Characters } />
          <Route exact path="/locations" component={ Locations } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
