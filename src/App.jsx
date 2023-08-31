import React, { Component } from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import LogIn from "./Components/LogIn";
import Coursepage from "./Components/Coursepage";
import { Test } from "./Components/Test";
import Javascriptcomponent from "./Javascriptcomponent";
import  Reactcomponent  from "./Components/Reactcomponent";
import Blockchaincomponent from "./Blockchaincomponent";
import Yoruba from "./Yoruba";
import Hausa from "./Hausa";
import Igbo from "./Igbo"
import Webdevelopment from "./Webdevelopment";
import Pythoncomponent from "./Pythoncomponent";
import Expresscompo from "./Components/Expresscompo";
import MongoComponent from "./Components/MongoComponent";
import Tailwindcomponent from "./Components/Tailwindcomponent";
import Contactus from "./Components/Contactus";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/coursespage" element={<Coursepage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/javascript" element={<Javascriptcomponent/>} />
        <Route path="/Ractcomponent" element={<Reactcomponent/>} />
        <Route path="/Blockchaincomponent" element={<Blockchaincomponent/>} />
        <Route path="/Yoruba" element={<Yoruba/>} />
        <Route path="/Hausa" element={<Hausa/>} />
        <Route path="/Igbo" element={<Igbo/>} />
        <Route path="/Webdevelopment" element={<Webdevelopment/>} />
        <Route path="/Pythoncomponent" element={<Pythoncomponent/>} />
        <Route path="/Expresscompo" element={<Expresscompo/>} />
        <Route path="/MongoComponent" element={<MongoComponent/>} />
        <Route path="/Tailwindcomponent" element={<Tailwindcomponent/>} />
        <Route path="/Contactus" element={<Contactus/>} />

      </Routes>
    </div>
  );
};

export default App;
