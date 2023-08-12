import React from 'react'
import book from '../images/book.png'
import { Table } from 'antd';

const Main = () => {


  const courses = [
    {
      image: <img src={ book } alt="" />,
      courseNumber: "100",
      courseName: "Total Courses",
    },
    {
      image: <img src={ book } alt="" />,
      courseNumber: "2",
      courseName: "Total Done",
    },
    {
      image: <img src={ book } alt="" />,
      courseNumber: "5",
      courseName: "Approved Courses",
    },
    {
      image: <img src={ book } alt="" />,
      courseNumber: "25",
      courseName: "Certified Courses",
    }
  ];

  const data = [
    {
      key: "1",
      studentName: "Fadeelah",
      courseSelected: "Java Script",
      courseDuration: "One Month"
    },
    {
      key: "2",
      studentName: "Precious",
      courseSelected: "Python",
      courseDuration: "One Month"
    },
    {
      key: "3",
      studentName: "David",
      courseSelected: "ReactJS",
      courseDuration: "One Month"
    },
    {
      key: "3",
      studentName: "David",
      courseSelected: "ReactJS",
      courseDuration: "One Month"
    },
    {
      key: "3",
      studentName: "David",
      courseSelected: "ReactJS",
      courseDuration: "One Month"
    },
    {
      key: "3",
      studentName: "David",
      courseSelected: "ReactJS",
      courseDuration: "One Month"
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "studentName",
      key: "key"
    },
    {
      title: "Course",
      dataIndex: "courseSelected",
      key: "key"
    },
    {
      title: "Duration",
      dataIndex: "courseDuration",
      key: "key"
    }
  ];

  

  return (
    <div className='flex flex-col'>
      <div className='p-10 flex flex-wrap justify-evenly gap-10 mb-20'>

            {courses.map((course, index) => {
              return <div key={index} className='h-[9rem] w-80 bg-[white] rounded-md shadow-sm flex flex-col justify-center items-center'>
                  {/* <div className='h-[10rem] w-[10rem] mx-auto'>{course.image}</div> */}
                  <h1 className='font-extrabold text-center'>{course.courseNumber}</h1>
                  <h1 className='font-extrabold text-center'>{course.courseName}</h1>
              </div>
            })}


      </div>

      <div className='w-[90%] mx-auto'>
        <Table dataSource={data} columns={columns}>

        </Table>
      </div>
    </div>
  )
}

export default Main