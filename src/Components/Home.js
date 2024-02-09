import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';





function Home() {
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("nature");

//using useEffect hook 

useEffect(()=>{
  // here call api
  fetch(
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=92b2fae1270fe3d6555ed0f40a6b222a&tags=cat&per_page=10&format=json&nojsoncallback=1"
  )
  .then()
  .then()
  .catch( (err)=>{
    console.log(err);
  })

})

const handleInputChange = (event)=>{
setInputValue(event.target.value);
}
 


const handleKeyPress=(event)=>{
if(event.key=== "Enter"){
  //api call// 

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
<Form.Control type='text' placeholder='Search ...............' value = {inputValue}
onChange= {handleInputChange}
onKeyPress = {handleKeyPress}/>
<h6 className='text-center text-secondary'>
  Pics of Cat
</h6>
{/* control is used to create input box */}
</Card.Body>


</Card>
</Container>
    </div>
  )
}

export default Home