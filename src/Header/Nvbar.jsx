import React from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'



function Nvbar() {

  return (
   

      
       <Navbar expand="lg" bg="light" variant="light" backgroundColor="white">
      <Container style={{backgroundColor:"teal" , fontColor:"white",  }}>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className ="nav"href='/'>Home</Nav.Link>
            <Nav.Link className ="nav" href='/courses'>AllCourses</Nav.Link>
            <Nav.Link   className ="nav"href="/profile">Team</Nav.Link>
             <Nav.Link  className ="nav" href="/About">About</Nav.Link>
            <Nav.Link  className ="nav"href="/pricing">Contact us</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )

}

export default Nvbar