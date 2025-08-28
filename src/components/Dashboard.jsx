import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from '../Aboutsec/Card';
import Wwrapper from '../Aboutsec/Wwrapper';
import  '../Aboutsec/wrapper.css';
import Testimonial from './Testimonial';
import Footer from '../footer/Footer';
import {  Link, useNavigate } from 'react-router-dom';


function Dashboard() {
  const divStyle = {
  backgroundImage:`url("/public/images/pexels-olly-3769021.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '90%',
  position :'fixed',
  top:'120px',
  zIndex:-1,
  
 
 

  
  


}
const navigate=useNavigate();
  
 
  return (
    <>
    <div  className=" d-flex align-items-center justify-content-center   mb-0 mt-0 " > 
       <div style={divStyle  } className="d-flex align-items-center justify-content-center text-white ">
    <Container>
      <h6 class="fs-4"   >
        Welcome To STUDHUB
        
      </h6>
      <h5 class="display-3">BEST ONLINE EDUCATION</h5>
      <div className='w-50'>Join thousands of learners in mastering new subjects through expert-curated content,
         hands-on projects, and flexible course schedules.
          our app offers video lessons, quizzes, flashcards, and more — all tailored to your pace.<br/>
        
         <Button  className=' m-2 m-md-4'  variant='secondary'   size="lg"  style={{"backgroundColor": '#0e7171ff',"boder":"none" }}>
        Get Started
      </Button>
       <Button  className=' m-2 m-md-4'  variant='default'   size="lg"  style={{"backgroundColor": '#b3c0c0ff',"boder":"none" ,color:'#0e7171ff' }}>
        Get Started
      </Button>
    </div>

    </Container>
   
     

  </div>

  

  


    </div>
    <div class='margin'  style={{  width:'100%', }}>
    <Card/>
  </div>
  <div style={{width:'100%' }}>
     <div style={{ marginTop:'0px',height: "50px", background: "linear-gradient(to bottom, #2ac3bbff, #285252ff)",}}></div>
  
    <Wwrapper/>
  </div>
    <div>
      <Testimonial/>
      
    </div>
    <div>
       
      <Footer/>
    </div>

    </>
    
  )
}

export default Dashboard