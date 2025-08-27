import React from 'react'
import { awrapper } from '../assets/dummydata'
import { Col, Container, Row } from 'react-bootstrap'

function Wwrapper() {
  const sstyle={
    backgroundImage:'url("src/assets/pexels-hillaryfox-1595389.jpg")',
    backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '40vh',
  width: '100%',
  

  zIndex:-1

  }
  return (
    <div  className=' pt-5 text-center d-flex   mb-0 mt-0' style={sstyle}>
        {
            awrapper.map((valu)=>
                
                  <div className='p-3 pt-5'>
                    
                   
                   
                
                   <img className=" w-25 " src={valu.cover}/>
                <h1 className=' fs-6' >{valu.data}</h1>
                   <h3 className=' fs-6' >{valu.title}</h3>
                  
                   
            </div>

                        
            )
        }
    </div>
  )
}

export default Wwrapper

