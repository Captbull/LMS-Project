import React, { useState } from "react";
import Select from "react-select";

const interestsOptions = [
  "html", "css", "js"
];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    courses: [],
  });

  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInputChange = (key, value) => {
    if (key === "courses") {
      setFormData((prevData) => ({...prevData, courses: [...prevData.courses, {name: value}]}));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
      
    }
  };
console.log(formData)
  const checkboxHandler = () => {
    setCheckbox(!checkbox);
  };

  const handleInterestsChange = (selectedOptions) => {
    setSelectedInterests(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    fetch("https://lms-backend-2mm5.onrender.com/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-[gray]  shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >

<div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>handleInputChange("firstName", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>handleInputChange("lastName", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) =>handleInputChange("email", e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            name="password"
            value={formData.password}
            onChange={(e) =>handleInputChange("password", e.target.value)}
            required
          />
        </div>

       

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Interests
          </label>
         
          <select multiple name="courses" id="" onChange={(e) => handleInputChange("courses", e.target.value)}>
            {interestsOptions.map((item) => (
<option value={item}>
  
  {item}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        {<div className="text-[black] text-center">{message}</div>}
      </form>
    </div>
  );
};

export default SignUpForm;
