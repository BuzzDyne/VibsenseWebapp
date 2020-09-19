import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {db} from '../firebase'
import {beautifyDate} from '../helper/SensorHelper'

function Sensor() {

  let url = useParams();

  

  let docAddr = 'Sensors/' + url.sID;
  
  const [dataRows, setDataRows] = useState([])

  useEffect(() => {
    db.doc(docAddr)
      .get()
      .then((snapshot) => {
        

        const newDataRow = snapshot.data().data.map((item) => ({
          // new Date(0).setUTCSeconds(item._timestamp.seconds)
          timestamp:item._timestamp.seconds,
          batt: item.batt,
          temp: item.temp,
          fft: item.fft,
          peak_x: item.peak_x,
          peak_y: item.peak_y,
          peak_z: item.peak_z,
          rms_x: item.rms_x,
          rms_y: item.rms_y,
          rms_z: item.rms_z,
        }))

        setDataRows(newDataRow)
        
      })
  }, [docAddr])

  

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Timestamp</th>
          <th>Batt(V)</th>
          <th>T°C</th>
          <th>Peak(X)</th>
          <th>Peak(Y)</th>
          <th>Peak(Z)</th>
          <th>RMS(X)</th>
          <th>RMS(Y)</th>
          <th>RMS(Z)</th>
        </tr>
        </thead>

        <tbody>
        {dataRows.map((dataRow, i) => 
          <tr key={i}>
            <td>{beautifyDate(dataRow.timestamp)}</td>
            <td>{dataRow.batt}</td>
            <td>{dataRow.temp}</td>
            <td>{dataRow.peak_x}</td>
            <td>{dataRow.peak_y}</td>
            <td>{dataRow.peak_z}</td>
            <td>{dataRow.rms_x}</td>
            <td>{dataRow.rms_y}</td>
            <td>{dataRow.rms_z}</td>
          </tr>
         )}
        </tbody>

      </table>


      
    </div>
  )
}

export default Sensor
