import React, {useState, useEffect}from 'react';
import {BrowserRouter as Router} from "react-router-dom"

import './App.css';

import Menu from './components/Menu'
import Header from './components/Header';
import Login from './components/Login';

import {auth} from './firebase'

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
      debugger
    })
      

    return () => {
      // cleanup
      unsub()
    }
  }, [])

  if(user == null) {
    return <Login />
  } else {
    return (
      <Router>
        <div className="app">
          <Header/> 
          <Menu companyID="rDAeKWkR5cvn9SClJr9l"/>
        </div>
      </Router>
    );
  }
}

export default App
