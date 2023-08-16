import React from 'react'

const Header = ({ pageTitle }) => {
  return (
    <header className='flex px-[2rem] bg-[white]'>
      <h1 className='font-extrabold text-[1.5rem] absolute left-[50rem] top-[2rem]'>{pageTitle}</h1>
    </header>
  )
}

export default Header