import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
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



  return (
    <div>
    
      <Switch>
          <Route path="/Company/:cID" render={() => <LayerSelection lvlID={0}/>}/>
          {/* <Route path="/" render={() => <LayerSelection parentID={companyID} lvlID={0}/>}/> */}
          <Route path="/Factory/:fID/:cID" render={() => <LayerSelection lvlID={1}/>}/>
          <Route path="/ProdLine/:pID/:fID/:cID" render={() => <LayerSelection lvlID={2}/>}/>
          
          <Route path="/Machine/:mID/:pID/:fID/:cID" render={() => <Machine lvlID={3}/>}/>
          <Route path="/Sensor/:sID" render={() => <Sensor lvlID={4}/>}/>

          <Route render={() => {
            return (
              <Link to="/Company/kwfnAj7iXbQ2PTkpV3dw"> <button>Login</button></Link>
          )}} />
      </Switch>
    </div>
  )
}

export default Menu
