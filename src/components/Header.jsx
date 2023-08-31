import React from 'react'
import Avatar from "../images/avatar.jpg";

const Header = () => {
  return (
    <div>
       <div className=" justify-between flex px-2 h-[15%] pt-5">
        <div className="  text-xl font-normal">Welcome, AdminName</div>
        <div className="w-60 h-11 bg-[#14408b] bg-opacity-25  rounded-xl flex justify-between items-center">
          <img src={Avatar} alt="" className=" h-[2rem]" />
          <span>AdminName</span>
        </div>
      </div>
    </div>
  )
}

export default Header