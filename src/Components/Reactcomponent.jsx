import React from "react";
import Header from "./Header";
import YouTube from "react-youtube";
import Taiyeheader from "./Taiyeheader";

const ReactComponent = () => {
  const videoId = "Rh3tobg7hEo";
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%",  // Adjust the width as needed
  };

  return (
    <div className="bg-gray-100 min-h-screen">
    <Taiyeheader/>
      <div className="container mx-auto p-4">
        <YouTube videoId={videoId} opts={opts} className="flex justify-center items-center h-screen rounded-tl-lg" />
        <h1 className="text-3xl text-[#08538C] font-semibold mb-4 mt-8">Getting Started with React</h1>
        <p className="text-[#08538C] mb-6">
          React is a popular JavaScript library for building user interfaces. It allows you to create reusable components
          and efficiently manage the state of your application.
          To start using React, you'll need to set up your development environment and understand its key concepts.
        </p>
        <h2 className="text-[#08538C] font-semibold mb-4">Setting Up React</h2>
        <p className="text-[#08538C] mb-6">
          To set up a React project, you can use tools like Create React App (CRA) or set up your own build process using
          tools like Webpack and Babel. CRA provides a quick way to start a new project with a preconfigured development environment.
          You can install it using the following command:
          <br />
          <code className="bg-gray-200 px-2 text-[#08538C] py-1 rounded-md font-mono text-sm">npx create-react-app my-app</code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Components and JSX</h2>
        <p className="text-[#08538C] mb-6">
          In React, you build UIs using components. Components are reusable building blocks that encapsulate UI logic and rendering.
          JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in your JavaScript files. JSX makes it
          easier to describe the structure of your components:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            {/* const Greeting = () => &#123; */}
            <br />
            &nbsp;&nbsp;return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
            <br />
            &#125;
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">State and Props</h2>
        <p className="text-[#08538C] mb-6">
          React components can have state and receive props. State represents data that can change over time, while props are
          immutable data passed from parent to child components. You can use state and props to create dynamic and interactive
          user interfaces:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            class Counter extends React.Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123; count: 0 &#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;div&gt;Count: &#123;this.state.count&#125;&lt;/div&gt;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </code>
        </p>
        <h2 className="text-xl text-[#08538C] font-semibold mb-4">Handling Events</h2>
        <p className="text-[#08538C] mb-6">
          In React, you can handle events like button clicks by attaching event handlers to your components. Event handlers are
          functions that are executed when events occur. For example, to handle a button click:
          <br />
          <code className="bg-gray-200 text-[#08538C] px-2 py-1 rounded-md font-mono text-sm">
            class Button extends React.Component &#123;
            <br />
            &nbsp;&nbsp;handleClick() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log("Button clicked!");
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;button onClick=&#123;this.handleClick&#125;&gt;Click me&lt;/button&gt;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </code>
        </p>
        {/* ...Continue adding more React-related content here... */}
      </div>
    </div>
  );
};

export default ReactComponent;
