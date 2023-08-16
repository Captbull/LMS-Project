import React, { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import { Route, Routes } from 'react-router'

const App = () => {

  const [pageTitle] = useState("Instructor")
  return (
    <div className='h-[100svh] grid grid-cols-[10%_1fr] bg-[#f5f5f5] overflow-hidden'>
      <SideBar></SideBar>

      <div className='grid grid-rows-[10%_1fr]'>
        <Header pageTitle={pageTitle}></Header>
        <Main></Main>
      </div>
       
      

      

    </div>
  
  )
}

export default App