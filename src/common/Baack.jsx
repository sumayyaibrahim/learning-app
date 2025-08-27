import React from 'react'

function Baack({title,desc}) {
    const divStyle = {
  backgroundImage: `url("src/assets/pexels-liza-summer-6347902.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '90%',
  position :'absolute',
  top:'130px',
  zIndex:-1
  
  
};

 
  return (
    <div style={divStyle} >
    <h1 className="m-5">{title}</h1>
             <h3>{desc}</h3>
 </div>
  )
}

export default Baack