import React, {useState} from "react";




function ToListenedAlbums({rank, image, name}){

  const [toggle, setToggle] = useState(false);

  
  const toggler = () => {
    setToggle (!toggle)
    console.log(toggle)
  }

return(
    <div key={rank}>
        <h2>{name}</h2>

        <img   
        src={image}
        alt={name}/>
        <br/>
        <button onClick={toggler} style={ toggle ? { color:'blue'} : {color : 'red'} }>{toggle === false? "Album is fire" : "Meh 🤷"}</button>



    </div>

)}


export default ToListenedAlbums;
