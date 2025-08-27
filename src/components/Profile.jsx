import React from 'react'
import { team } from '../assets/dummydata'
import '../components/profile.css'
import Testimonial from './Testimonial'


function Profile() {
  return (
    <div>
      <h3 className='mx-5  px-4'>Meet Our Strength</h3>
      <div className='w-100 d-flex flex-wrap justify-content-between mb-5 ' style={{paddingLeft:'9%',paddingRight:'9%'}}>
        {
          team.map((value)=>
            <div className='border border-4 mt-3 p-3 d-flex flex-col align-items-center out  '>
              <img className='w-70 ' src={value.cover}></img>
              
              <div className=' border border-2 p-2  outer '>
              <p>
                {value.name}
              </p>
              <p>
                {value.work}
                </p>
                </div>
                
               <div className='d-flex flex-column gap-4 social '>

                <a href=""><i  class="fa-brands fa-facebook fa-lg " style={{color: "#1aa8a5"}}></i></a>
              
              
             <a href=""> <i class="fa-brands fa-instagram fa-lg" style={{color:" #148a99"}}></i></a>


              
              <a href=""><i class="fa-brands fa-twitter fa-lg" style={{color:" #28a0b8"}}></i></a>
                </div>
                
                
            </div>
          )
        }

      </div>
      

    </div>
  )
}

export default Profile