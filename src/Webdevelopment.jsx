import React from "react";
import Header from "./Components/Header";
import YouTube from "react-youtube";
import Taiyeheader from "./Components/Taiyeheader";

const WebDevelopment = () => {
  const videoId = "zJSY8tbf_ys";
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%",   // Adjust the width as needed
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Taiyeheader/>
      <div className="container text-gray-700 mx-auto p-4">
        <YouTube videoId={videoId} opts={opts} className="flex justify-center items-center h-screen rounded-tl-lg" />
        <h1 className="text-3xl text-[#08538C] font-semibold mb-4 mt-8">Exploring Web Development</h1>
        <p className="text-gray-700 mb-6">
          Web development is the process of creating websites and web applications that are accessible on the internet. It involves various
          technologies and skills to design, develop, and maintain interactive and user-friendly digital experiences.
          Let's dive into the key aspects of web development and how to get started on your journey.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Front-End Development</h2>
        <p className="text-gray-700  mb-6">
          Front-end development focuses on creating the visual and interactive aspects of a website that users interact with directly.
          You'll learn HTML for structure, CSS for styling, and JavaScript for adding interactivity. Modern frameworks like React, Angular,
          and Vue.js enhance front-end development by enabling the creation of dynamic and responsive user interfaces.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Back-End Development</h2>
        <p className="text-gray-700 mb-6">
          Back-end development involves working on the server-side of web applications. You'll learn programming languages like Python, PHP,
          Ruby, or Node.js to handle data storage, user authentication, and server logic. Frameworks like Django, Ruby on Rails, and Express.js
          streamline back-end development tasks.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Full-Stack Development</h2>
        <p className="text-gray-700 mb-6">
          Full-stack developers are proficient in both front-end and back-end technologies. They can build entire web applications from start
          to finish, handling everything from user interfaces to server-side logic. Full-stack development is essential for creating
          comprehensive and functional web projects.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Responsive Design</h2>
        <p className="text-gray-700 mb-6">
          With the proliferation of mobile devices, responsive design is crucial. You'll learn how to create websites that adapt and look great
          on various screen sizes. Media queries and flexible layouts enable you to craft a seamless user experience across devices.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Web Development Tools</h2>
        <p className="text-gray-700 mb-6">
          Web development involves a range of tools like code editors (VS Code, Sublime Text), version control (Git), and package managers (npm, yarn).
          Familiarity with these tools enhances your productivity and collaboration with other developers.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Version Control and Deployment</h2>
        <p className="text-gray-700 mb-6">
          Version control systems like Git enable you to track changes in your codebase and collaborate with others effectively. Deploying a website
          involves making it accessible on the internet through hosting platforms like Netlify, GitHub Pages, or cloud services like AWS and Heroku.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Web Security</h2>
        <p className="text-gray-700 mb-6">
          Web security is paramount to protect user data and ensure a safe browsing experience. You'll learn about securing user information,
          implementing HTTPS, preventing common attacks like cross-site scripting (XSS) and SQL injection, and following best practices for web security.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Web Development Trends</h2>
        <p className="text-gray-700 mb-6">
          The field of web development is always evolving. Stay up-to-date with trends like progressive web apps (PWAs), serverless architecture,
          single-page applications (SPAs), and the integration of AI and machine learning in web experiences.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Starting Your Web Development Journey</h2>
        <p className="text-gray-700 mb-6">
          Whether you're interested in front-end, back-end, or full-stack development, web development offers exciting opportunities to create
          meaningful digital experiences. Start by learning the basics, building simple projects, and gradually tackling more complex challenges.
          With dedication and continuous learning, you'll become a proficient web developer capable of building remarkable online solutions.
        </p>
        {/* ...Continue adding more comprehensive web development-related content here... */}
      </div>
    </div>
  );
};

export default WebDevelopment;
