import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nvbar from './Header/Nvbar'
import Dashboard from './components/Dashboard'

import CourseDetail from './Aboutsec/CourseDetail'
import Login from './components/Login'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Priicing from './components/Priicing'
import Coontact from './components/Coontact'
import CourseList from './course/CourseList'
import Onlinecourse from './course/Onlinecourse'
import Enroll from './components/Enroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/About" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pricing" element={<Priicing/>}/>
         <Route path="/contact" element={<Coontact/>}/>
          <Route path="/onlinecourse" element={<Onlinecourse/>}/>
          <Route path="/enroll/:coursename" element={<Enroll/>}/>

        
      </Routes>
    </>
  )
}

export default App
