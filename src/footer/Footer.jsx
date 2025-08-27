import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
   
    const styl={listStyle:'none',backgroundColor:'#0e7171ff' ,}
  return (
    <div className='bg-#0e7171ff container text-center  pt-4 pb-3  mb-0 'style={styl}>
    <footer className="footer row  ">
      <div className="footer-section col-md-4 mb-3  ">
        <h4>Company</h4>
        <ul style={styl} >
          <li >About</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-section col-md-4 mb-3">
        <h4>Support</h4>
        <ul style={styl}>
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="footer-section col-md-4 mb-3 ">
        <h4>Social</h4>
        <ul style={styl}>
          <li><FaTwitter  className='mx-2'/> Twitter</li>
          <li><FaLinkedin   className='mx-2'/>LinkedIn</li>
          <li><FaInstagramSquare   className='mx-2'/>Instagram</li>
        </ul>
      </div>
    </footer>
    
    </div>
  )
}

export default Footer