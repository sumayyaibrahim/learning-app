import React from 'react'
import { homeAbout } from '../assets/dummydata'
import Wwrapper from './Wwrapper'

function Card() {
  return (
    <div    style={{marginTop:'0px',marginBottom:'0px',padding:'0px'}} >
      <div  className='p-5 mb-0 mt-0' style={{color:'grey' ,backgroundColor:'white'}}>
        <h3 style={{color:'black'}} className='text-center'>ABOUT STUDHUB</h3>
        <h4 style={{color:'#1aa8a5', textAlign:'center'}}>Our Mission</h4>
        <p  className='fs-4'style={{color:'black',marginTop:'20px',marginBottom:'0px'}}>STUDHUB is dedicated to transforming the way people learn online by offering a wide range of courses tailored for learners of all levels. We believe in empowering individuals through education to help them achieve their goals and build better futures.</p>
      </div>

   
    <div  className="w-100 container text-black-50 bg-white mt-0"  >
      
        <div className=" row w-100 m-0" style={{marginTop:'20px',marginBottom:'0px'}}>
            <div className=" w-100 col " style={{marginTop:'20px',marginBottom:'0px'}}>

              <img  className=" w-100 w-md-50 w-lg-25"style={{ "maxHeight":"600px" ,marginTop:'0px',marginBottom:'0px' }} src="/images/pexels-karolina-grabowska-5908808.jpg"></img>
                </div>
                <div className="col">
                  <h4 className='' style={{color:'#329c9bff'}}>LEARN ANYTHING</h4>
                    {homeAbout.map((value)=>
                      <div 
                     className='  w-100 w-md-50 w-lg-25  flex flex-col md:d-flex '>
                     <div className='image   '>
                      <img src={value.cover}></img>
                     </div>
                     <div class="details">


                      <h2>
                {value.title}  
                      </h2>
                      <p>  {value.desc}</p>
                      

                     </div>
                        </div>)}
                </div>
        </div>
        
    </div>
     </div>
  )
}

export default Card