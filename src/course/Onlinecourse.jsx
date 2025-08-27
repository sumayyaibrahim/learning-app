import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { online } from '../assets/dummydata';
import './couse.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Onlinecourse() {
 const  navigate=useNavigate()
  const handleClick=(coursename)=>{navigate(`/enroll/${encodeURIComponent( coursename)}`)}
  return (
    <div className=' container p-4 text-center text-black-50  w-100 w-md-50 w-lg-25' >
    < div className=" row ">
       <h5  className='text-success'>courses</h5>
    <h3 >
        ONLINE COURSES
       
        </h3>
        <div className='col d-flex flex-wrap justify-content-between w-100 w-md-50 w-lg-25'>
            {


                online.map((value)=>
                    
                    <div  className='mt-4'>
                    
<Card class="card" style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src= {value.cover} />
      <Card.Body>
        <Card.Title> {value.courseName}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button className='but' variant="primary" onClick={()=>handleClick(value.courseName)}>get details</Button>
      </Card.Body>
    </Card>
    </div>)

}
        </div>
        </div>
        
         </div>


  )
}

export default Onlinecourse
