import React from "react";
import { Table } from "antd";
import { useEffect, useCallback, useState } from "react";

const Instructor = () => {
  const [instructorData, setInstructorData] = useState([])
  const token = localStorage.getItem("token");
  const getInstructorDetails = useCallback(
    async () => {
      const request = await fetch(
        "https://lms-backend-2mm5.onrender.com/user/getUserProfile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await request.json()
      // console.log(response)
      setInstructorData(response?.data)
    },
    [token]
  )

  useEffect(() => {
    getInstructorDetails()
  }, [getInstructorDetails]);

  const Columns = [
    {
      title: "First Name",
      dataIndex: "InstructorName",
      key: "key",
    },
    {
      title: "Last Name",
      dataIndex: "instructorName",
      key: "key",
    },
    {
      title: "Email",
      dataIndex: "instructorEmail",
      key: "key",
    },
    {
      title: "Course",
      dataIndex: "instructorCourse",
      key: "key",
    },
    
  ];
  const dataSource = [];

//   const data = instructorData?.map((instructor, index) => {
// return{
//   key: index + 1,
  
//   firstName: instructor?.firstName,
//   lastName: instructor?.lastName,
//   email: instructor?.email,
//   courses: instructor?.courses,

// };
//   })
console.log(instructorData);
  return (
    <div>
      <div className=" h-[100%]">
        <Table dataSource={dataSource} columns={Columns} />
      </div>
    </div>
  );
};

export default Instructor;
