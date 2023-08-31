import React, { useState } from "react";
import Taiyeheader from "./Taiyeheader";

const courses = ["html", "css", "js","react", "mongoDB", "react native", "express","tailwind"];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    courses: [],
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (key, value) => {
    if (key === "courses") {
      setFormData((prevData) => ({
        ...prevData,
        courses: [...prevData.courses, { name: value }],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://lms-backend-2mm5.onrender.com/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        courses: formData.courses
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error submitting form");
        }
      })
      .then((data) => {
        setMessage("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("Error submitting form. Please try again later.");
      });
  };

  return (
    <div className="bg-[white] w-[100%] h-[100vh] ">
    <Taiyeheader/>
      <form
        onSubmit={handleSubmit}
        className=" w-[35rem] ml-[35%] mt-[5rem] shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-[#08538c] text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow-md appearance-none border border-[#08538c] h-[4rem]  rounded w-full py-2 px-3 text-[#08538c] leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#08538c] text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow-md appearance-none border border-[#08538c] h-[4rem] rounded w-full py-2 px-3 text-[#08538c] leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#08538c] text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow-md appearance-none border border-[#08538c] h-[4rem] rounded w-full py-2 px-3 text-[#08538c] leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#08538c] text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow-md appearance-none border border-[#08538c] h-[4rem] rounded w-full py-2 px-3 text-[#08538c] leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            name="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
  <label className="block text-[#08538c] text-sm font-bold mb-2">
   COURES
  </label>
  {courses.map((item) => (
    <label key={item} className="inline-flex  items-center mr-4">
      <input
        type="checkbox"
        name="courses"
        value={item}
      
        onChange={(e) => handleInputChange("courses", e.target.value)}
      />
      <span className="ml-2  text-[#08538c]">{item}</span>
    </label>
  ))}
</div>


        <div className="flex items-center justify-between">
          <button
            className="bg-[#333983] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="text-[text-[#08538c]] text-center">{message}</div>
      </form>
    </div>
  );
};

export default SignUpForm;

