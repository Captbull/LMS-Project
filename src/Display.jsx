import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import { Outlet } from 'react-router'




const Display = () => {

  const [pageTitle] = useState("Instructor")
  

  return (
    <div className='h-[100svh] grid grid-cols-[10%_1fr] bg-[#f5f5f5] overflow-hidden gap-[1rem]'>
      <SideBar></SideBar>

      <div className='grid grid-rows-[10%_1fr]'>
        <Header pageTitle={pageTitle}></Header>
        <Outlet/>
    
      </div>
       

      

      

    </div>
  
  )
}

export default Display