import React from 'react'
import AlbumContainer from './AlbumContainer'
import ToListen from './ToListen'
import NewAlbumForm from './NewAlbumForm'
import NavBar from './NavBar'
import Home from './Home'
import { useState, useEffect } from "react";
import { Route, Switch }  from 'react-router-dom';




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

    fetch('http://localhost:3000/savedalbums', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(listenSoon)

    })
    

  
   
    
    
    }



  }


  useEffect( ()=>{

    
    fetch('http://localhost:3000/savedalbums')
  .then(response => response.json())
  .then(albumslisten => setToListen(albumslisten));






  }, [])

  const makeAlbum = (albumComing) =>{
    
   console.log(albumComing)


    // fetch('http://localhost:3000/savedalbums', {
    //   method: 'POST',
    //   headers: {"Content-Type" : "application/json"},
    //   body: JSON.stringify("hi")

    // })
    
    setAlbums([albumComing,...albums]);
   
   
  }

  return (<>
  

  <NavBar />

  <Switch> 
    <Route exact path = "/albumcontainer">
      <AlbumContainer 
      clickToListen={clickToListen} 
      albums={albums}/>
    </Route>   

    <Route exact path ="/tolisten">
     <ToListen
      toListen={toListen}
      />
    </Route>

    <Route exact path = "/newalbumform">

      <NewAlbumForm makeAlbum={makeAlbum}/>
    </Route>

    <Route exact path = "/">
        <Home />
      </Route>


  </Switch> 

  </>)
}

export default App;
