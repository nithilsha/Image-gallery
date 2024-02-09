import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';




function Home() {
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("nature");

//using useEffect hook 

useEffect(()=>{
  // here call api
  fetch(
 `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=92b2fae1270fe3d6555ed0f40a6b222a&tags=${searchTerm}&per_page=10&format=json&nojsoncallback=1`
  )
  .then((response) => response.json())
  .then((data)=>{
    console.log(data);

    const photos = data.photos.photo;
const fetchedImages = photos.map((photo)=>({

original :`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,// this is the main bg photo//

thumbnail:`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`, // this is for small pics showing below the main one// 

description: photo.title
}));

setImages(fetchedImages);

  })
  .catch( (err)=>{
    console.log(err);
  })

}, [searchTerm]);

const handleInputChange = (event)=>{
setInputValue(event.target.value);
}
 


const handleKeyPress=(event)=>{
if(event.key=== "Enter"){
  //api call// 
setSearchTerm(inputValue);
}
}

  return (
    <div>
{/* logics to call api and get images */}


{/* used react bootstrap */}


<Container>
{/* container is used to wrap the content used to give padding andf margin */}
<Card className='mt-5'>
{/* it is a compenent which gives boundery or outline . contain header, body and footer  */}

<Card.Header className='text-secondary'> Image Gallery </Card.Header>



<Card.Body>
<Form.Control className = "text-center" type='text' placeholder='Search for some images' value = {inputValue}
onChange= {handleInputChange}
onKeyPress = {handleKeyPress}/>
<h6 className='text-center text-secondary mb-2 mt-2'>Pics of {searchTerm}
</h6>
<ImageGallery items={images} />;



{/* control is used to create input box */}
</Card.Body>


</Card>
</Container>
    </div>
  )
}

export default Home