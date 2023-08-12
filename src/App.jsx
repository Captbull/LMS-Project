import React, { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'

const App = () => {

  const [pageTitle] = useState("Instructor")
  return (
    <div className='h-[100svh] bg-[#f5f5f5] overflow-hidden'>
      <Header pageTitle={pageTitle}></Header>
      
      <section className='h-full overflow-auto grid grid-cols-1 md:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr]'>
        <SideBar></SideBar>
        <Main></Main>
      </section>
      

      

    </div>
  
  )
}

export default App