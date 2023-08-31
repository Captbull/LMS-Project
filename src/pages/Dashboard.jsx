import React from "react";

const Dashboard = () => {
  const admin = [
    {
      number: "5",
      name: "Total Instructors",
    },

    {
      number: "7",
      name: "Total Courses",
    },

    {
      number: "6",
      name: "Approved Courses",
    },

    {
      number: "0",
      name: "Rejected Courses",
    },

    {
      number: "1",
      name: "Pending Courses",
    },
  ];

  const topInstructor = [
    {
      title: "Top Instructors",
      tutorName: [<li>Edeh</li>, <li>Justina</li>, <li>Francis</li>],
    },
  ];

  const topCourses = [
    {
      title: "Top Courses",
      CourseName: [<li>HTML</li>, <li>CSS</li>, <li>React</li>],
    },
  ];

  return (
    <div className=" h-[100svh]  gap-[5rem]">
      <div className=" flex flex-wrap justify-evenly mb-20">
        {admin.map((Admin, index) => {
          return (
            <div className=" h-[9rem] w-[10rem] bg-[#14408b] bg-opacity-20  rounded-md shadow-sm flex flex-col justify-center items-center">
              <h1 className="pb-[1rem] font-semibold">{Admin.name}</h1>
              <h1 className=" text-2xl">{Admin.number}</h1>
            </div>
          );
        })}
      </div>

      <div className=" flex flex-wrap justify-evenly mb-20">
        {topInstructor.map((topInstructor, index) => {
          return (
            <div>
              <a
                href="Instructor"
                className=" tracking-tighter text-blue-700 text-end"
              >
                See all
              </a>
              <div className=" h-[13rem] w-[20rem] bg-[#14408b] bg-opacity-20 rounded-md justify-center shadow-sm flex flex-col items-center">
                <h1 className=" font-semibold  pb-[1rem]">
                  {topInstructor.title}
                </h1>
                <h1 className=" font">{topInstructor.tutorName}</h1>
              </div>
            </div>
          );
        })}

        <div className=" flex flex-wrap justify-evenly mb-20">
          {topCourses.map((topCourses, index) => {
            return (
              <div>
                <a
                  href="Courses"
                  className=" tracking-tighter text-blue-700 text-end"
                >
                  See all
                </a>
                <div className=" h-[13rem] w-[20rem] bg-[#14408b] bg-opacity-20  rounded-md shadow-sm flex flex-col justify-center items-center">
                  <h1 className="pb-[1rem] font-semibold">
                    {topCourses.title}
                  </h1>
                  <h1>{topCourses.CourseName}</h1>
                  {/* <h1>{topCourses.CourseName.Course2}</h1>
              <h1>{topCourses.CourseName.Course3}</h1> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
