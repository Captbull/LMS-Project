import React from 'react'
import avatar from '../images/avatar.jpg'

const Header = ({ pageTitle }) => {
  return (
    <header className='flex items-center justify-between px-[2rem] bg-[white] shadow-md shadow-[grey]'>
      <h1 className='font-bold text-[1.5rem]'>Welcome {pageTitle}</h1>
     
      <div className='flex items-center justify-between bg-[#bdbbbb] px-[4rem] py-[0.7rem] rounded-md'> 
        <img src={ avatar } alt="" className='w-[2rem]' /> 
        <h1 className=''>{pageTitle}</h1>
      </div>
    </header>
  )
}

export default Header