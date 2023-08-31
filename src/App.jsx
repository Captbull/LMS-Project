import React from 'react'
import Admin from './components/Admin'
import { Route, Routes } from 'react-router'
import Instructor from '../src/pages/Instructor'
import Courses from './pages/Courses'
import Approved from './pages/Approved'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <div className=' '>
<Routes>
<Route element={<Admin/>}>
  <Route path='/' element= {<Dashboard/>}/>
<Route path='/Instructor' element={<Instructor/>} className=" bg-black"/>
<Route path='/courses' element={<Courses />}/>
<Route path='/Approved' element={<Approved/>}/>
</Route>
</Routes>
  
   
    </div>
  )
}

export default App
