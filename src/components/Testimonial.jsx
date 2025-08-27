import React from 'react'
import { testimonal } from '../assets/dummydata'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Testimonial() {
  return (
   <div className='bg-white' style={{marginTop:'0px'}}>
    <div className='bg-white mx-md-5 pt-4'>
      <h3>Testimonial</h3>
      <h4>Our successful Students</h4>
    </div>
    
         <div className='d-flex justify-content-center mt-4 w-100'>
    <div className='w-75 flex-wrap d-flex justify-content-between bg-white px-4 alig-items-center text-center mb-4 mt-2'>
        {testimonal.map((data)=> <Card style={{ width: '18rem',marginTop:'10px' }}>
      <Card.Img className='w-50 mx-5' variant="top" src={data.cover} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         <p>{data.post}

         </p>
         <p>
            {data.desc}
         </p>
        </Card.Text>
     
      </Card.Body>
    </Card>)}
        </div>
        </div>
        </div>
        
 
    
  )
}

export default Testimonial