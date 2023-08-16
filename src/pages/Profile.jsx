import React, { useState } from 'react'
// import { FaImage } from 'react-icons/fa'
import avatar from '../images/avatar.jpg'

const Profile = ({ pageName }) => {


    const profiles = [
        {
            img: <img src={ avatar } alt="" className='rounded-full' />,
            firstName: "Matthew",
            lastName: "Olajuwon",
            email: "olajuwonmatthew@gmail.com",
            teachCourse: ["React.Js", " ", " ", "Java Script", " ", " ", "Node.Js", " ", " ", "TailwindCSS"]
        }
    ]


  return (
    <section className='h-[100%] flex flex-auto justify-between items-start ml-[4rem] mt-[4rem]'>

        {profiles.map((profile, index) => {
            return <div key={index} className="w-96 h-96 bg-white rounded-3xl">
                {/* <div className='w-96 h-96 rounded-full border-2 border-[green]'>{profile.img}</div> */}
                <h1>Name: {profile.firstName} {profile.lastName}</h1>
                <h1>Email: {profile.email}</h1>
                <h1>Courses: {profile.teachCourse}</h1>
            </div>
        })}
    </section>
  )
}

export default Profile