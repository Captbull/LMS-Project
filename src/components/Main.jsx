import React, { useState } from 'react'
import Courses from '../pages/Courses'
import Profile from '../pages/Profile'
import { Route, Routes } from 'react-router'

const Main = () => {

  const [pageName] = useState("Profile")
  return (
    <div className='bg-[#f1f1f1]'>
      <Routes>
        <Route path='/Profile' element={<Profile pageTitle={pageName}/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        
      </Routes>
      {/* <Courses></Courses> */}
    </div>
  )
}

export default Main