import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
// import LayerSelectionItem from './LayerSelectionItem';

import firebase from '../firebase'
import {getCustomLinks} from '../helper/LevelSelectionHelper'

// ??? What does props and match do?
function LayerSelection(props, match) {
  /**
   * Component for "Company", "Factory". and "ProdLine"
   */

  //  Get params (docIDs) from the url

  let url = useParams();
  
  const links = getCustomLinks(Object.entries(url))

  const [menuItems, setMenuItems] = useState([])

  // This code query the collection to get the childID,
  // While the childIDs is avaible at current document under "childrenMetada" field
    // useEffect(() => {
    //   firebase
    //     .firestore()
    //     .collection(links.linksSource)
    //     .get()
    //     .then((snapshot) => {
          
    //       const newMenuItem = snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data()
    //       }))
          
    //       console.log('newMenuItem');
    //       console.log(newMenuItem);

    //       setMenuItems(newMenuItem)

    //     })
    // }, [links.linksSource])
  //

  
  useEffect(() => {
    firebase
      .firestore()
      .doc(links.docSource)
      .get()
      .then((snapshot) => {
        

        const newMenuItem = snapshot.data().childrenMetadata.map((item) => ({
          id: item._childID,
          name: item.childName,
          desc: item.childDesc,
          imgUrl: item.childImgUrl
        }))

        setMenuItems(newMenuItem)

      })
  }, [links.linksSource])


  return (
    <div>
      {/* {props.lvlID} and {params[0][1]} */}

      <ol>
        {menuItems.map((menuItem) =>
          <li key={menuItem.id}>
            <ul>
              <li>{menuItem.name}</li>
              <li><code>{menuItem.desc}</code></li>
              <Link to={'/'+links.linkTrgt+menuItem.id}>
                <button>Go</button>
              </Link>
            </ul>
          </li>
        )}
      </ol>

      {/* 
        {items.map(item => (
          <LayerSelectionItem name={item.name} price={item.price} key={item.id}/>
        ))} 
      */}

    </div>
  );
}

export default LayerSelection
