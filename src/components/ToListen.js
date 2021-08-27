import React from "react";
import ToListenAlbum from "./ToListenAlbum"





function ToListen({toListen, clickToListened}){


   
    


    return(
        <div>
            
            {
            toListen.map((album) => <ToListenAlbum 
            key={album.id} 
            name={album.name} 
            image={album.image}
            clickToListened={clickToListened}
             />)
             }
            
         
        
        </div>





    )




    }



export default ToListen;
