import React, {useState, useEffect} from "react";
import AlbumsAdded from "./AlbumsAdded"

function NewAlbumForm() {

  

const [newTitle, setTitle] = useState("")
const [newGenre, setGenre] = useState("")
const [newImage, setImage] = useState("")
const [newDescription, setDescription] = useState("")
const [newAlbumArray, setNewAlbumArray] = useState( [] )




useEffect( ()=>{

    
    fetch('http://localhost:3000/albumsadded')
  .then(response => response.json())
  .then(data => setNewAlbumArray(data));








  }, [])

 


  const handleSubmit = event => {
    event.preventDefault();
    
    let passedObject = {
      rank: Math.random(),
      title: newTitle,
      genre: newGenre,
      description: newDescription,
      image: newImage
    }


    setNewAlbumArray([passedObject,...newAlbumArray])

    fetch('http://localhost:3000/albumsadded', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(passedObject)
  
      })

  }



  

  return (<>

    


    <form onSubmit = {handleSubmit} className="new-poem-form">
      <input placeholder="Album and Band" 
      value = {newTitle}
      onChange = {(e) => setTitle(e.target.value)}
      
      />
      <input placeholder="Genre" 
      value = {newGenre}
      onChange = {(e) => setGenre(e.target.value)}
      
      />
      <textarea placeholder="Write your description here..." rows={10} 
      value = {newDescription}
      onChange = {(e) => setDescription(e.target.value)}

      />
      <textarea placeholder="Put an image URL here..." 
      value = {newImage}
      onChange = {(e) => setImage(e.target.value)}

      />
      <input type="submit" value="New Album!" />
    </form>
  
       {
        newAlbumArray.map((album) => <AlbumsAdded 
        genre={album.genre} 
        key={album.rank} 
        title={album.title} 
        description={album.description} 
        image={album.image}
       
        />)
        }
  
  
  
  
  
  </>);
}

export default NewAlbumForm;
