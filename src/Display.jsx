import React, { useState } from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'


const Display = () => {

  const [pageTitle] = useState("Instructor")
  

  return (
    <div className='h-[100svh] grid grid-cols-[10%_1fr] bg-[#f5f5f5] overflow-hidden gap-[1rem]'>
      <Link to="/Display">
        <SideBar></SideBar>

        <div className='grid grid-rows-[10%_1fr]'>
          <Header pageTitle={pageTitle}></Header>
          <Outlet/>

        </div>
      </Link>
    
    </div>
  
  )
}

export default Display