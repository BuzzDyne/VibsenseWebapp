import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"

import './App.css';

import Menu from './components/Menu'
import Header from './components/Header';
// import Company from './Company';
// import LayerSelection from './LayerSelection';

function App() {

  // const [companyID, setCompanyID] = useState()

  // const [user, setuser] = useState();
  // const [gList, setgList] = useState();

  return (
    <Router>
      <div className="app">
        <Header/>

        <Menu companyID="rDAeKWkR5cvn9SClJr9l"/>

      </div>
    </Router>
  );
}

export default App
