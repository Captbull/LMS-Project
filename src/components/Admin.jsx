import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router'

const Admin = () => {
  return (
    <div className=' h-[100svh] grid grid-cols-[15%_1fr] bg-[#f5f5f5] overflow-hidden gap-[1rem]'>
      <SideBar/>
      <div className=' grid grid-rows-[10%_1fr]'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Admin
