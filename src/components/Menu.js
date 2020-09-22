import React from 'react'
import {Route, Switch, Link, Redirect} from 'react-router-dom'
import LayerSelection from './LayerSelection'
import Machine from './Machine'
import Sensor from './Sensor'

function Menu({companyID}) {
  // levelCodes
  // 0 (Company) 
  // 1 (Factory) 
  // 2 (ProdLine)
  // 3 (Machine)
  // 4 (Sensor)

  let defaultCompany = '/Company/' + companyID


  return (
    <div>
    
      <Switch>
          <Route path="/Company/:cID" render={() => <LayerSelection lvlID={0}/>}/>
          <Route path="/Company/">
            <Redirect to={defaultCompany}/>
          </Route>

          {/* <Route path="/" render={() => <LayerSelection parentID={companyID} lvlID={0}/>}/> */}
          <Route path="/Factory/:fID/:cID" render={() => <LayerSelection lvlID={1}/>}/>
          <Route path="/ProdLine/:pID/:fID/:cID" render={() => <LayerSelection lvlID={2}/>}/>
          
          <Route path="/Machine/:mID/:pID/:fID/:cID" render={() => <Machine lvlID={3}/>}/>
          <Route path="/Sensor/:sID" render={() => <Sensor lvlID={4}/>}/>

          <Route render={() => {
            return (
              <Link to={defaultCompany}> <button>Go back to Home</button></Link>
          )}} />
      </Switch>
    </div>
  )
}

export default Menu
