import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/Company/:cID">
            <h1>Company</h1>
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;
