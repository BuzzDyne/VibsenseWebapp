import React, {useState, useEffect}from 'react';
import {BrowserRouter as Router} from "react-router-dom"

import './App.css';

import Menu from './components/Menu'
import Header from './components/Header';
import Login from './components/Login';

import {auth, db} from './firebase'

function App() {

  const [user, setUser] = useState();
  const [cID, setcID]   = useState();
  


  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // User is logged in
        setUser(authUser);
        // Get companyID associated with user
        db.collection("Companies")
          .where("registeredUserIDs", "array-contains", authUser.uid)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              setcID(doc.id)
            })
          })

      } else {
        // User is logged out
        setUser(null);
      }
    })
      

    return () => {
      // cleanup
      unsub()
    }
  }, [])

  // let userEmail = ''

  // if(user !== undefined) {
  //   userEmail = user.email
  // }

  if(user == null) {
    return <Login />
  } else {
    return (
      <Router>
        <div className="app">
          <Header /> 
          <Menu companyID={cID}/>
        </div>
      </Router>
    );
  }
}

export default App
