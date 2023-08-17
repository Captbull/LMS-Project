import React, { Component } from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import LogIn from "./Components/LogIn";
// import Header from "./Components/Header";
// import Main from "./Components/Main";




const App = () =>{
  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/SignUpForm" element={<SignUpForm/>} />  
      <Route path="/LogIn" element={<LogIn/>} /> 
    </Routes>
  </div>)
}

export default App