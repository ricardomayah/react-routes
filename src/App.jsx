import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Hola</h1>
        <hr/>
        <Switch>
          <Route path="/contacto">
            Esta es un apagina de contacto
          </Route>
          <Route path="/contacto">
            Esta es un apagina de contacto
          </Route>
          <Route path="/contacto">
            Esta es un apagina de contacto
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
