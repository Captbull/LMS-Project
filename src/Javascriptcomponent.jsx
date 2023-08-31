import React from "react";
import Header from "./Components/Header";
import YouTube from "react-youtube";
import Taiyeheader from "./Components/Taiyeheader";

const JavascriptComponent = () => {
  const videoId = "W6NZfCO5SIk";
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%",  // Adjust the width as needed
  };

  return (
    <div className="bg-gray-100 min-h-screen">
     <Taiyeheader/>
      <div className="container text-[#08538C] mx-auto p-4">
      <YouTube videoId={videoId} opts={opts} className="flex justify-center items-center h-screen rounded-tl-lg" />
        <h1 className="text-3xl font-semibold mb-4 ">JavaScript Basics: Understanding Variables</h1>
        <p className="text-gray-700 mb-6">
          In JavaScript, variables are used to store and manage data. They act as containers for values like numbers, strings, or objects.
          To declare a variable, you use the 'var', 'let', or 'const' keyword. For example:
          <code className="bg-gray-200 px-2 py-1 rounded-md font-mono text-sm">let age = 25;</code>
          The 'let' keyword creates a variable named 'age' and assigns the value '25' to it.
        </p>
        <h2 className="text-xl font-semibold text-[#08538C] mb-4">Data Types in JavaScript</h2>
        <p className="text-[#08538C] mb-6">
          JavaScript supports various data types, including numbers, strings, booleans, arrays, and objects. For example:
          <ul className="list-disc list-inside">
            <li>Number: <code>let count = 10;</code></li>
            <li>String: <code>let name = "John";</code></li>
            <li>Boolean: <code>let isStudent = true;</code></li>
            <li>Array: <code>let colors = ["red", "green", "blue"];</code></li>
          </ul>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Control Structures</h2>
        <p className="text-[#08538C] mb-6">
          JavaScript provides control structures like if statements and loops for making decisions and repeating actions in your code.
          For example, an if statement can be used to execute code conditionally:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            if (isStudent) &#123;
            <br />
            &nbsp;&nbsp;console.log("You're a student!");
            <br />
            &#125;
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Loops and Iteration</h2>
        <p className="text-[#08538C] mb-6">
          Loops allow you to repeat a block of code multiple times. The 'for' loop is commonly used:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            {/* for (let i = 0; i < 5; i++) &#123; */}
            <br />
            &nbsp;&nbsp;console.log("Iteration: " + i);
            <br />
            &#125;
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Functions in JavaScript</h2>
        <p className="text-[#08538C] mb-6">
          Functions allow you to encapsulate blocks of code that can be reused. Here's a simple function:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            function greet(name) &#123;
            <br />
            &nbsp;&nbsp;return "Hello, " + name + "!";
            <br />
            &#125;
            <br />
            let message = greet("Alice");
            <br />
            console.log(message); {/* Output: Hello, Alice! */}
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Working with Objects</h2>
        <p className="text-[#08538C] mb-6">
          Objects in JavaScript allow you to store collections of key-value pairs. You can access values using keys:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            let person = &#123;
            <br />
            &nbsp;&nbsp;firstName: "John",
            <br />
            &nbsp;&nbsp;lastName: "Doe",
            <br />
            &#125;
            <br />
            console.log(person.firstName); {/* Output: John */}
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Asynchronous JavaScript</h2>
        <p className="text-[#08538C] mb-6">
          Asynchronous programming is crucial for handling tasks that may take time, such as network requests. JavaScript provides
          tools like callbacks, Promises, and async/await for managing asynchronous operations:
          <br />
          <code className="bg-gray-200 px-2 py-1 rounded-md font-mono text-sm">
            function fetchData() &#123;
            <br />
            &nbsp;&nbsp;return fetch("https://api.example.com/data")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;.then(response =  response.json())
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;.then(data = console.log(data))
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;.catch(error = console.error(error));
            <br />
            &#125;
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Modern JavaScript (ES6+)</h2>
        <p className="text-[#08538C] mb-6">
          Modern JavaScript introduces features like arrow functions, destructuring, template literals, and more. These enhancements
          make your code more concise and readable:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            const greet = name = `Hello, ${}!`;
            <br />
            console.log(greet("Bob")); {/* Output: Hello, Bob! */}
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Browser Document Object Model (DOM)</h2>
        <p className="text-[#08538C] mb-6">
          The DOM represents the structure of a web page and allows JavaScript to interact with it. You can manipulate elements,
          change styles, and respond to events:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            const button = document.querySelector("#myButton");
            <br />
            button.addEventListener("click", () = &#123;
            <br />
            &nbsp;&nbsp;button.textContent = "Clicked!";
            <br />
            &#125;);
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Error Handling</h2>
        <p className="text-[#08538C] mb-6">
          Handling errors gracefully is important. JavaScript provides 'try...catch' blocks for catching and handling exceptions:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            try &#123;
            <br />
            &nbsp;&nbsp;const result = 10 / 0;
            <br />
            &#125; catch (error) &#123;
            <br />
            &nbsp;&nbsp;console.error("An error occurred: " + error.message);
            <br />
            &#125;
          </code>
        </p>
        {/* ...Continue adding more JavaScript-related content here... */}
      </div>
    </div>
  );
};

export default JavascriptComponent;
