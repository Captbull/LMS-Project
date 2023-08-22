import React, { useState, useEffect } from 'react'
// import avatar from '../images/avatar.jpg'
import axios from "axios";

const profileAPI = "https://lms-backend-2mm5.onrender.com/user/"


const Profile = () => {
    
    const [loading, setLoading] = useState(false)
    const [profiles, setProfiler] = useState([
      {
        courses: null,
        dateCreated: null,
        email: null,
        firstName: null,
        lastName: [null],
        role: null,
        _id: null
      }
    ])

    const arrayAPI = [];
    
  
    const getProfiler = async() => {
      setLoading(true)
      try {
        const response = await axios.get(profileAPI + "getUserProfile", {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRlMDYwMDAyNzZlN2M5Mjg2MDVlMDkiLCJpYXQiOjE2OTI2MjgxNzAsImV4cCI6MTY5MjcxNDU3MH0.B5rcxcvaE5fd622qFeTCgz9C07hiXybb0rXl7gPtd_w"
          }
        });
        setProfiler(response.data.data)
        setLoading(false)
        // console.log(arrayAPI.push(setProfiler(response.data.data)))
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
  
    useEffect(() => {
      getProfiler()
    }, [])

arrayAPI.push(profiles)
console.log(arrayAPI)

  return (

    <>
        {
        loading ? (
            <div className='flex items-center justify-center'>
                Fetching profile...
            </div>
    ) : 
     (
        <section className='h-[100%] flex flex-auto justify-between items-start m-[2rem]'>
        {/* {arrayAPI?.map((profiler, index) => {
            console.log(profiles)
            return <div key={index} className="h-[100%] w-[100%] bg-white rounded-3xl flex items-start justify-evenly">
                <div className='rounded-full mt-[3rem] border-[.125rem] border-[#1062ab]'>img: <img src={ avatar } alt="" className='rounded-full' />,</div>
                <div className='font-semibold text-[2rem] mt-[8rem] space-y-5'>
                    <h1 className='border-[.125rem] border-[#eec009] rounded-2xl'>Name: {profiler.firstName} {profiler.lastName}</h1>
                    <h1 className='border-[.125rem] border-[#5bbab8] rounded-2xl'>Email: {profiler.email}</h1>
                    <h1 className='border-[.125rem] border-[#353983] rounded-2xl'>Courses: {profiler.courses}</h1>
                    <h1 className='border-[.125rem] border-[#1062ab] rounded-2xl'>Name: {profiler.role}</h1>
                    <h1 className='border-[.125rem] border-[#eec009] rounded-2xl'>Name: {profiler.dateCreated}</h1>
                </div>
            </div>
        })} */}

        {arrayAPI.map((item, index) => {
          return <div key={index}>
            <h1>{}</h1>
          </div>
        })}
        
    </section>
     ) } 
    </>
    
  )
}

export default Profile