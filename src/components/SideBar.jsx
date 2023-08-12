import React from 'react'
import { FaAppStore } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='h-[100%] flex flex-col items-center shadow-sm shadow-[grey] bg-white pr-[6.5rem]'>
        <h1 className='font-bold'>Dashboard</h1>

        <div className='mt-[2rem] ml-[4rem] grid grid-cols gap-[2rem] font-semibold'>
          <h1 className='flex flex-row items-center justify-around'> <FaAppStore/> Courses</h1>
          <h1 className='flex flex-row items-center justify-around'> <FaAppStore/> Awards</h1>
          <h1 className='flex flex-row items-center justify-around'> <FaAppStore/> Quizzes</h1>
          <h1 className='flex flex-row items-center justify-around'> <FaAppStore/> Settings</h1>
          <h1 className='flex flex-row items-center justify-around'> <FaAppStore/> Log Out</h1>
        </div>
    </div>
  )
}

export default SideBar