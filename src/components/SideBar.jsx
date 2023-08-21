import React from 'react'
import { CgProfile } from "react-icons/cg"
import { BsBook } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'
import { MdQuiz } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import sail1 from '../images/sail1.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col items-center bg-[#5bbcb3] bg-opacity-30 shadow-lg shadow-green-700'>
      <div className=''>
        <img src={ sail1 } alt="" className='h-[5rem] w-[5rem] mr-[4rem]'/>
      </div>
        <h1 className='font-bold mt-[2rem] mr-[2rem] flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 bg-[#14408b] p-[0.4rem] text-[white]'> <RxDashboard/> Dashboard</h1>

        <div className='mt-[2rem] flex flex-col gap-[2rem] font-semibold cursor-pointer mr-[3rem] text-[#14408b]'>
          <Link to="/" className='flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'> <CgProfile/>Profile</Link>
          <Link to="/Courses" className='flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'> <BsBook/> Courses</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'> <FaAward/> Awards</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'> <MdQuiz/> Quizzes</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'> <FiSettings/> Settings</Link>
          <Link className='flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'> <BiLogOut/> Log Out</Link>
        </div>
    </div>
  )
}

export default SideBar