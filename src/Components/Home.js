import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';





function Home() {
  const [images, setImages] = useState([]);
  const [inputValues, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
 
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
<Form.Control type='text' placeholder='Search ...............'/>
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