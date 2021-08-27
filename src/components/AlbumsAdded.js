import React, {useState} from "react";



function AlbumsAdded({genre, rank, image, title, description}){





    
  

return(
    <div rank={rank}>
        <h2>{title}</h2>
        <h3>{genre}</h3>
        <p>{description}</p>

        <img   
        src={image}
        alt={title}/>
        


    </div>

)}


export default AlbumsAdded;
