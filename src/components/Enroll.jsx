import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { coursesCard } from '../assets/dummydata';
import { Button, Col, Row } from 'react-bootstrap';




export default function Enroll() {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const[image,setimage]=useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
const { coursename} = useParams();
const decodedName = decodeURIComponent(coursename);
console.log(decodedName)
 const navigate=useNavigate()

  const handleSelectCourse = (course) => {
    setimage(false)
    setSelectedCourse(course);
    setFormData({ name: '', email: '' }); // reset form when selecting
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🎉 Enrollment Successful!\n\nCourse: ${decodedName}\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    // Reset state
    setSelectedCourse(null);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="container py-5">
      <div className='text-center'>
      <h2 className="mb-4 text-center">Course Enrollment</h2></div>
      <button onClick={()=>{navigate(-1) ;scrollToTop()}} className='bg-primary border border-none rounded text-white p-2'>BACKTO COURSE</button>
    <Row>
      
    <Col>
   {
    coursesCard.filter((item)=>item.coursesName==decodedName
  
  ).map((item)=> <div className="p-4 border rounded-xl shadow-md mt-4">
      <h3 className="text-2xl font-semibold text-warning">{item.coursesName}</h3>
      <p>{item.desc}</p>
      <p>Teacher: {item.courTeacher.map((item)=>
        <div><h4 className='text-success'>{item.name}</h4> 
       
        <h4>{item.totalTime}</h4>

        </div>)}</p>
      <p className='text-success'><strong>Price:</strong> ${item.pricePer}</p>
      
    </div>)

   }
   <Button className='mt-3' onClick={handleSelectCourse}>ENROLL NOW</Button>
    
    
    </Col>
<Col>

      {/* Enrollment Form */}
      {selectedCourse && (
        <div className="card  mt-4 mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h4 className="card-title mb-3">Enroll in {decodedName}</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Confirm Enrollment
              </button>
              <button
                type="button"
                className="btn btn-secondary w-100 mt-2"
                onClick={() => setSelectedCourse(null)}
              >
                Back to Courses
              </button>
            </form>
          </div>
        </div>
      )}
      </Col>
  </Row>
    </div>
  );
}
