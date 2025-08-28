import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Animation from '../components/Animation';
import { coursesCard } from '../assets/dummydata';

function Coursehome() {
   const  navigate=useNavigate()
  const handleClick=(coursename)=>{navigate(`/enroll/${encodeURIComponent( coursename)}`)}
  
  return (
    <div
    >
      <div  className=" container text-black-70 mt-0 mb-0  " >
            <div className=" row m-3 ">
               <h4 className='' style={{color:'#329c9bff'}}></h4>
               <div><Animation/></div>
               
                    <div className="col  d-flex flex-wrap w-100 w-md-50 w-lg-25 justify-content-between   " >
                      
                        {coursesCard.map((value)=>
                        <div className='mt-4'>
                           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.cover} />
      <Card.Body>
        <Card.Title>{value.coursesName}</Card.Title>
        <div className='mt-2 mb-2'>
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
            <label>(5.0)</label> 
              </div>
              <div>
                {value.courTeacher.map((details)=><div>
                  <div>
                    <img src={details.dcover}></img>
                    <p>{details.name}</p>
                    </div>
                    <p>{details.totalTime}</p>
                </div>
              )}
              </div>
                   
        
       
        <Button variant="light" style={{color:'#227d7dff'}} onClick={()=>handleClick(value.coursesName)}>Enroll Now</Button>
      </Card.Body>
    </Card></div>)}
    
                    
                    </div>
            </div>
            </div></div>
  )
}

export default Coursehome