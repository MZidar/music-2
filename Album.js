import React, {useState} from "react";



function Album({genre, rank, image, name, description, clickToListen}){


const [toggle, setToggle] = useState(false);



    const handleListen = e => {


     

          const passedListen = {
          name: e.target.name,
          image: e.target.value,
          id: Math.random(),

        }
    
        console.log(e.target)
       

        clickToListen(passedListen)
        setToggle (!toggle)

        console.log(passedListen)
    
      }


  

return(
    <div key={rank}>
        <h2>{name}</h2>
        <h3>{genre}</h3>
        <p>{description}</p>

        <img   
        src={image}
        alt={name}/>
        <button name={name} value={image} disabled={toggle} onClick={handleListen}>Add to listened</button>
        


    </div>

)}


export default Album;
