import React from 'react'
import Nvbar from './Nvbar'
import './navbar.css'
import { Col, Container, Row } from 'react-bootstrap'

function Header() {
    
    
  return (
    
  
    
    <>
      <Container style={{ backgroundColor:"white"}}>
      <Row >
        <Col style={{"color":"teal"}} xs={6}> <h2 style={{marginTop:"10px"}}>STUDHUB</h2><p>Online Education & Learning</p></Col>
             
        <Col className='  d-flex   ' style={{alignItems:"center", justifyContent:"end"}}>
        
        
        
        <i class="fa-brands fa-github fa-xl" style={{"color":"teal","margin":"3px"}}></i>
        <i class="fa-brands fa-facebook fa-lg" style={{"color":"teal" ,"margin":"3px"}} ></i>
        <i class="fa-brands fa-twitter fa-lg" style={{"color":"teal","margin":"3px"}}></i>
        <i class="fa-brands fa-youtube fa-lg" style={{"color":"teal","margin":"3px"}}></i>
        </Col>

          
           
      </Row>
    </Container>

        <Nvbar/></>
  )
}

export default Header