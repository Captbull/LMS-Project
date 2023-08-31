import React from 'react'
import Instructor from '../pages/Instructor'
import Courses from '../pages/Courses'
import Approved from '../pages/Approved'
import Dashboard from '../pages/Dashboard'

const Main = () => {
  return (
    <div>
        <Dashboard/>
      <Instructor/>
      <Courses/>
      <Approved/>
    </div>
  )
}

export default Main
