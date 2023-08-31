import React from "react";
import Logo from "../images/sail2.png";
import { RiAdminLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { GiBlackBook } from "react-icons/gi";
import { MdApproval } from "react-icons/md";
import { Link } from "react-router-dom";
import {BiLogOut} from 'react-icons/bi';

const SideBar = () => {
  
  
  return (
    <div className=" flex flex-col h-[100vh] bg-[#5bbcb3] bg-opacity-30  shadow-green-700 shadow-lg min-w-fit">
      <img src={Logo} alt="" className="mb-[4rem] h-[6rem] w-[15rem]" />

      <div className=" flex gap-2 bg-[#14408b] bg-opacity-40 mb-[2.5rem] items-center pl-3 ">
        <RiAdminLine className=" h-[2rem] w-[1.5rem]" />
        <span className=" font-medium medium text-lime-800 ">ADMIN</span>
      </div>

      <div className=" flex gap-2 mb-[1rem]  items-center pl-3 hover:bg-[#f2b907]">
        <RxDashboard className=" h-[2rem] w-[1.5rem]" />
        <span className=" text-[#14408b] text-lg  ">
        <Link to="/">Dashboard</Link>
        </span>
      </div>

      <div className=" flex gap-2 mb-[1rem]  items-center pl-3 hover:bg-[#f2b907]">
        <RxAvatar className=" h-[2rem] w-[1.5rem]" />
        <span className="text-[#14408b] text-lg ">
          <Link to="/Instructor">Instructor</Link>
        </span>
      </div>

      <div className=" flex gap-2  items-center mb-[1rem] pl-3 hover:bg-[#f2b907]">
        <GiBlackBook className=" h-[2rem] w-[1.5rem]" />
        <span className="text-[#14408b] text-lg ">
          <Link to="/Courses">Courses</Link>
        </span>
      </div>

      <div className=" flex gap-2 mb-[1rem]  items-center pl-3 hover:bg-[#f2b907] ">
        <MdApproval className=" h-[2rem] w-[1.5rem]" />
        <span className="text-[#14408b] text-lg ">
        <Link to='/Approved'>
        Approved</Link>
        </span>
        
      </div>
      <div className=" flex gap-2 mb-[1rem]  items-center pl-3 hover:bg-[#f2b907] ">
        <BiLogOut className=" h-[2rem] w-[1.5rem]" />
        <span className="text-[#14408b] text-lg ">
        Log Out
        </span>
      </div>
    </div>
  );
};

export default SideBar;
