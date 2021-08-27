import React from "react";
import Album from "./Album";





function AlbumContainer({albums, clickToListen}){


   console.log(clickToListen)
    


    return(
        <div>
        
            {
            albums.map((album) => <Album 
            genre={album.Genre} 
            key={album.Rank} 
            name={album.Album_name} 
            description={album.albumDescription} 
            image={album.Img}
            clickToListen={clickToListen}
           
            />)
            }
        
        
        </div>





    )




    }



export default AlbumContainer;
