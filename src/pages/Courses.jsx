import React from "react";
import book from "../images/book.png";
import { Pagination, Table } from "antd";

const Courses = () => {
  const courses = [
    {
      image: <img src={book} alt="" />,
      courseNumber: "10",
      courseName: "Uploaded Courses",
    },
    {
      image: <img src={book} alt="" />,
      courseNumber: "6",
      courseName: "Approved Courses",
    },
    {
      image: <img src={book} alt="" />,
      courseNumber: "3",
      courseName: "Pending Courses",
    },
    {
      image: <img src={book} alt="" />,
      courseNumber: "1",
      courseName: "Rejected Courses",
    },
  ];

  const data = [
    {
      key: "1",
      courseName: "JavaScript",
      courseEnrolled: "0",
      status: "One Month",
    },
    {
      key: "2",
      courseName: "React.JS",
      courseEnrolled: "0",
      status: "One Month",
    },
    {
      key: "3",
      courseName: "Hyper Text Markup Language(HTML)",
      courseEnrolled: "0",
      status: "One Month",
    },
    {
      key: "4",
      courseName: "Cascading Style Sheet(CSS)",
      courseEnrolled: "0",
      status: "One Month",
    },
    {
      key: "5",
      courseName: "PHP",
      courseEnrolled: "0",
      status: "One Month",
    },
    {
      key: "6",
      courseName: "Angular",
      courseEnrolled: "0",
      status: "One Month",
    },
  ];

  const columns = [
    {
      title: "S/N",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "courseName",
      key: "key",
    },
    {
      title: "Enrolled",
      dataIndex: "courseEnrolled",
      key: "key",
    },
    {
      title: "Duration",
      dataIndex: "status",
      key: "key",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="p-10 flex flex-wrap justify-evenly gap-10 mb-20">
        {courses.map((course, index) => {
          return (
            <div
              key={index}
              className="h-[9rem] w-80 bg-[white] rounded-md shadow-md shadow-[grey] cursor-pointer flex flex-col justify-center items-center hover:translate-y-5 hover:bg-[#e4dfdf] hover:text-[#14408b]"
            >
              {/* <div className='h-[10rem] w-[10rem] mx-auto'>{course.image}</div> */}
              <h1 className="font-extrabold text-center">
                {course.courseNumber}
              </h1>
              <h1 className="font-extrabold text-center">
                {course.courseName}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="w-[90%] mx-auto">
        <Table
          dataSource={data}
          columns={columns}
          style={{ backgroundColor: "white", borderRadius: "1rem" }}
          pagination={2}
        >
          <Pagination defaultCurrent={1} total={50} />
        </Table>
      </div>
    </div>
  );
};

export default Courses;
