import React from 'react'
import AlbumContainer from './AlbumContainer'
import ToListen from './ToListen'
import { useState, useEffect } from "react";


function App() {
 


  const[albums, setAlbums] = useState( [] )
  const[toListen, setToListen] = useState( [] )
  





  useEffect( ()=>{

    
    fetch('http://localhost:3000/albums')
  .then(response => response.json())
  .then(albums => setAlbums(albums));






  }, [])

 
 
  

  const clickToListen = (listenSoon) =>{


    if(listenSoon.name != ""){    
     

    
        
    setToListen([listenSoon,...toListen])

  
   
    
    
    }



  }


  
 

  return (<>
  
  <h1>APP</h1>
 
  <AlbumContainer 
    clickToListen={clickToListen} 
    albums={albums}/> 

  <ToListen
  toListen={toListen}
  />

  
  </>)
}

export default App;
