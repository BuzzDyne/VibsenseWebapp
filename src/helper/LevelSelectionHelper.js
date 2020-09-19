export function getCustomLinks(lvlIDs) {
  /* Returns an object of link strings
  *
  * LvlIDs   = Object[n][1]
  * Company  = [cID]
  * Factory  = [cID, fID]
  * ProdLine = [cID, fID, pID]
  * Machines = [mID, cID, fID, pID]
  */

 let res = {
   docSource   : '', //This Document's Fields
   linksSource : '', //This Document's Subcollection
   linkTrgt    : ''  //This Document's Sub-document's Link Target
 }

 switch(lvlIDs.length) {
   case 1:
     res.docSource   = 'Companies/' + lvlIDs[0][1];
     res.linksSource = 'Companies/' + lvlIDs[0][1] +'/Factories';
     res.linkTrgt    = 'Factory/' + lvlIDs[0][1] + '/'; // + FactoryID
     break;
   case 2:
     res.docSource   = 'Companies/' + lvlIDs[0][1] +'/Factories/' + lvlIDs[1][1];
     res.linksSource = 'Companies/' + lvlIDs[0][1] +'/Factories/' + lvlIDs[1][1] + '/ProdLines';
     res.linkTrgt    = 'ProdLine/' + lvlIDs[0][1] + '/'          + lvlIDs[1][1] + '/'; // + ProdLineID
     break;
   case 3:
     res.docSource   = 'Companies/' + lvlIDs[0][1] +'/Factories/' + lvlIDs[1][1] + '/ProdLines/' + lvlIDs[2][1];
     res.linksSource = 'Companies/' + lvlIDs[0][1] +'/Factories/' + lvlIDs[1][1] + '/ProdLines/' + lvlIDs[2][1] + '/Machines';
     res.linkTrgt    = 'Machine/'  + lvlIDs[0][1] + '/'          + lvlIDs[1][1] + '/'           + lvlIDs[2][1] + '/'; // + MachineID 
     break;
    case 4:
      res.docSource  = 'Companies/' + lvlIDs[0][1] +'/Factories/' + lvlIDs[1][1] + '/ProdLines/' + lvlIDs[2][1] + '/Machines/' + lvlIDs[3][1];
      res.linksSource= null;
      res.linkTrgt   = 'Sensor/' // + SensorID
      break;
   default:
     res.docSource   = null
     res.linksSource = null
     res.linkTrgt    = null
 }

 return res

}

// export function UseMenuItems(subColID) {
//   /**
//    * Takes in LevelID and Array of ParentID as param and returns the data of LevelItems
//    * 
//    * LvlIDs   = Object[n][1]
//    * Company  = [cID]
//    * Factory  = [cID, fID]
//    * ProdLine = [cID, fID, pID]
//    * 
//    * (Deprecated, content moved to main Function)
//    */

//   const [menuItems, setMenuItems] = useState([])

//   console.log("SubColID: " + subColID);

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection(subColID)
//       .get()
//       .then((snapshot) => {
        
//         const newMenuItem = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data()
//         }))
        
//         console.log('newMenuItem');
//         console.log(newMenuItem);

//         setMenuItems(newMenuItem)

//       })
//   }, [])


//   return menuItems
// }