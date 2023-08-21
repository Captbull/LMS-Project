import React from 'react'
import { Route, Routes } from 'react-router'
import Display from './Display'
import Profile from '../src/pages/Profile'
import Courses from '../src/pages/Courses'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Display />}>
          <Route path="/" element={<Profile />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
        </Route>
       
        
   
        
      </Routes>
    </div>
  )
}

export default App