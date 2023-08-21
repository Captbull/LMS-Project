import React from 'react'

const Header = ({ pageTitle }) => {
  return (
    <header className='flex px-[2rem] bg-[white] shadow-md shadow-[grey]'>
      <h1 className='font-extrabold text-[1.5rem] absolute left-[57rem] top-[2rem]'>{pageTitle}</h1>
    </header>
  )
}

export default Header