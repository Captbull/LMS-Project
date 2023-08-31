import React from "react";

import YouTube from "react-youtube";
import Taiyeheader from "./Taiyeheader";
const Tailwindcomponent = () => {
  const videoId = "Oe421EPjeBE";
  const opts = {
    height: "600", // Adjust the height as needed
    width: "100%",  // Adjust the width as needed
  };
  return (
    <div>
      <Taiyeheader/>
      <div className="content-container p-4">
      <YouTube
          videoId={videoId}
          opts={opts}
          className="flex justify-center items-center h-screen rounded-tl-lg"
        />
        <h2 className="text-2xl font-semibold mb-2">What is Tailwind CSS?</h2>
        <p className="text-[#2B6CB0]">
          Tailwind CSS is a highly customizable, utility-first CSS framework that allows you to rapidly build modern user interfaces. It provides a set of pre-designed utility classes that you can directly apply to your HTML elements to style and layout your content.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
        <ul className="list-disc ml-6 text-[#2B6CB0]">
          <li>Utility-First: Tailwind encourages composing styles by combining utility classes.</li>
          <li>Responsive Design: Easily create responsive layouts with responsive utility classes.</li>
          <li>Flexbox Grid: Built-in grid system using Flexbox for creating complex layouts.</li>
          <li>Customization: Tailwind is designed to be customized, allowing you to generate your own utility classes.</li>
          <li>Component-Oriented: Build reusable components using utility classes.</li>
          <li>Dark Mode: Supports building dark mode interfaces with specialized classes.</li>
          <li>Plugins: Extend Tailwind's functionality with community or custom plugins.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
        <p className="text-[#2B6CB0]">
          To get started with Tailwind CSS, you need to install it in your project using a package manager like npm or yarn. Once installed, you can include Tailwind's CSS file in your HTML or use a build process to generate a minimized version for production. Start applying utility classes to your HTML elements to style your UI.
          Explore the official Tailwind CSS documentation and guides to learn more about the available classes and customization options.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Next Steps</h2>
        <p className="text-[#2B6CB0]">
          Now that you have an understanding of Tailwind CSS's concepts, consider diving deeper into its responsive design features, advanced layout techniques, and customization possibilities. You can also explore integrating Tailwind with JavaScript frameworks like React or Vue.js to create dynamic and interactive user interfaces.
          As you become more comfortable with Tailwind, you'll be able to streamline your UI development process and create stylish and consistent designs.
        </p>

        <div className="text-center mt-6">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Explore Tailwind CSS Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tailwindcomponent;
