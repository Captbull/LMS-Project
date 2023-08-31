import React from "react";
import Header from "./Components/Header";
import YouTube from "react-youtube";

const Pythoncomponent = () => {
  const videoId = "kqtD5dpn9C8";
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%",   // Adjust the width as needed
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <YouTube videoId={videoId} opts={opts} className="flex justify-center items-center h-screen rounded-tl-lg" />
        <h1 className="text-3xl text-[#08538C]  font-semibold mb-4 mt-8">Exploring Python Programming</h1>
        <p className="text-gray-700 mb-6">
          Python is a versatile and widely-used programming language known for its simplicity and readability. It's used for various applications
          such as web development, data analysis, scientific computing, artificial intelligence, and more.
          Let's delve into the key aspects of Python programming and how to embark on your coding journey.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Getting Started with Python</h2>
        <p className="text-gray-700 mb-6">
          Python's clean syntax and easy learning curve make it an ideal choice for beginners. You'll learn the basics of variables, data types,
          and control structures such as loops and conditional statements. Python's interactive shell allows you to experiment and learn on the go.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Python Data Structures</h2>
        <p className="text-gray-700 mb-6">
          Python offers versatile data structures like lists, tuples, sets, and dictionaries. Lists can hold collections of items, while dictionaries
          store key-value pairs. Understanding data structures is crucial for efficient data manipulation and algorithm implementation.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Functions and Modules</h2>
        <p className="text-gray-700 mb-6">
          Functions in Python allow you to encapsulate blocks of code for reuse. You'll learn about defining functions, passing arguments, and returning values.
          Modules provide a way to organize code into separate files, allowing you to build scalable and maintainable applications.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Object-Oriented Programming (OOP)</h2>
        <p className="text-gray-700 mb-6">
          Python supports object-oriented programming, enabling you to create classes and objects with attributes and methods. OOP principles like inheritance,
          encapsulation, and polymorphism enhance code organization and reusability.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">File Handling and Input/Output</h2>
        <p className="text-gray-700 mb-6">
          Python allows you to read from and write to files, making it essential for tasks like data processing and file manipulation. You'll learn to work with
          text files, CSVs, JSON, and more.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Python Libraries and Frameworks</h2>
        <p className="text-gray-700 mb-6">
          Python's extensive ecosystem includes libraries and frameworks that simplify complex tasks. For example, NumPy and pandas are essential for data analysis,
          Flask and Django are popular web frameworks, and TensorFlow and PyTorch enable deep learning and AI development.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Debugging and Error Handling</h2>
        <p className="text-gray-700 mb-6">
          Debugging is a critical skill in programming. Python provides tools for identifying and fixing errors in your code. Learn about using print statements,
          debugging tools, and try-except blocks for graceful error handling.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Python in Real-World Applications</h2>
        <p className="text-gray-700 mb-6">
          Python's versatility is evident in its applications across various domains. It's used in web development, data science, machine learning, automation,
          scientific research, game development, and more. Understanding Python opens doors to exciting career opportunities.
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Continuing Your Python Journey</h2>
        <p className="text-gray-700 mb-6">
          As you grasp the fundamentals of Python, you can explore more advanced topics like decorators, generators, context managers, and asynchronous programming.
          Contributing to open-source projects, building your own applications, and continuous learning through online resources are key to becoming a proficient
          Python developer.
        </p>
        {/* ...Continue adding more comprehensive Python-related content here... */}
      </div>
    </div>
  );
};

export default Pythoncomponent;
