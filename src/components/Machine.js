import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import firebase from '../firebase'
import {getCustomLinks} from '../helper/LevelSelectionHelper'

function Machine() {
  
  // get URL params
  let urlParam = useParams();
  const links = getCustomLinks(Object.entries(urlParam));


  // Declare 'sensors' state, which is an array of object for sensors data 
  const [sensors, setSensors] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .doc(links.docSource)
      .get()
      .then((snapshot) => {
        

        const newSensor = snapshot.data().sensorsMetadata.map((item) => ({
          id: item._SensorID,
          name: item.sensorName,
          tag: item.sensorTagID,
          data: {
            timestamp: item._timestamp,
            batt: item.batt,
            temp: item.temp,
            peak_x: item.peak_x,
            peak_y: item.peak_y,
            peak_z: item.peak_z,
            rms_x: item.rms_x,
            rms_y: item.rms_y,
            rms_z: item.rms_z,
          }
        }))
        
        debugger

        setSensors(newSensor)
        
      })
  }, [links.docSource])


  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection(links.docSource)
  //     .get()
  //     .then((snapshot) => {
        
  //       const newSensor = snapshot.docs..map((doc) => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }))

  //       setSensors(newSensor)
  //     })
  // }, [links.linksSource])

  return (
    <div>
      {sensors.map((sensor) =>
          <p key={sensor.id}>
            <Link to={'/' + links.linkTrgt + sensor.id}>
              {JSON.stringify(sensor, null, 4)}
            </Link>
          </p>
        )}
    </div>
  )
}

export default Machine
