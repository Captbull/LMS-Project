import React, { Component } from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import LogIn from "./Components/LogIn";
import Coursepage from "./Components/Coursepage";
import { Test } from "./Components/Test";





const App = () =>{
  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/SignUpForm" element={<SignUpForm/>} />  
      <Route path="/LogIn" element={<LogIn/>} /> 

      <Route path="/courses" element={<Coursepage/>}/>
      <Route path="/test" element={<Test/>}/>
      
      

    </Routes>
    

  </div>)
}

export default App