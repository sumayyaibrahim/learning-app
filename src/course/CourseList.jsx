import React from 'react'
import Coursehome from './Coursehome'
import Onlinecourse from './Onlinecourse'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function CourseList() {
   const navigate = useNavigate();
    const  handleClick=()=>
    {
      
      navigate('/onlinecourse')
    }
  return (
    <div  className=' mb-0 mt-0'>
      <Coursehome/>
      <div className='w-100 d-flex justify-content-center mt-5 mb-5'>
      <Button variant="outline-info" onClick={handleClick} className='bg-white border-success text-success' >More ..</Button>
      
     </div>
    </div>
  )
}

export default CourseList