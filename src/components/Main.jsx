import React from "react";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";
import PageNotFound from "../PageNotFound";


const Main = () => {

  



  

  return (
    <div className="bg-[#f1f1f1]">
      <Profile></Profile>
      <Courses></Courses>
      <PageNotFound></PageNotFound>
    </div>
  );
};

export default Main;
