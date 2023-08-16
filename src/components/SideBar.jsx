import React from 'react'
import { CgProfile } from "react-icons/cg"
import { BsBook } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'
import { MdQuiz } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import sail1 from '../images/sail1.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col items-center shadow-sm shadow-[grey] bg-white'>
      <div className=''>
        <img src={ sail1 } alt="" className='h-[5rem] w-[5rem]'/>
      </div>
        <h1 className='font-bold'>Dashboard</h1>

        <div className='mt-[2rem] ml-[3rem] flex flex-col gap-[2rem] font-semibold cursor-pointer mr-[2rem]'>
          <Link to="/Profile" className='flex flex-row items-center justify-around gap-[0.2rem]'> <CgProfile/>Profile</Link>
          <Link to="/Courses" className='flex flex-row items-center justify-around gap-[0.2rem]'> <BsBook/> Courses</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem]'> <FaAward/> Awards</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem]'> <MdQuiz/> Quizzes</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem]'> <FiSettings/> Settings</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem]'> <BiLogOut/> Log Out</Link>
        </div>
    </div>
  )
}

export default SideBar