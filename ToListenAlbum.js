import React, {useState} from "react";



function ToListenedAlbums({rank, image, name, clickToListened}){

  
    const [listenedName, setListenedName] = useState("")
    const [listenedImage, setListenedImage] = useState("")


    const handleListened = e => {

        e.preventDefault()
        setListenedName(e.target.value)
        setListenedImage(e.target.name)

     

          let passedListened = {
          name: listenedName,
          image: listenedImage,
          id: Math.random(),

        }
        console.log(passedListened)

        
        clickToListened(passedListened)

        
    
      }


return(
    <div key={rank}>
        <h2>{name}</h2>

        <img   
        src={image}
        alt={name}/>



    </div>

)}


export default ToListenedAlbums;
