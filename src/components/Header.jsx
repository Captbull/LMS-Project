import React from 'react'
import sail1 from '../images/sail1.png'

const Header = ({ pageTitle }) => {
  return (
    <header className='h-[6rem] shadow-sm shadow-[grey] bg-white flex px-[2rem]'>
      <div className=''>
        <img src={ sail1 } alt="" className='h-[5rem] w-[5rem] justify-self-start'/>
      </div>

      <h1 className='font-bold'>{pageTitle}</h1>
    </header>
  )
}

export default Header