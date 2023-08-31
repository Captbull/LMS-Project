import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Taiyeheader from "./Taiyeheader";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_7b3xjjg",
        "template_tryx68r",
        form.current,
        "fdxNOHADNawxcRCyr"
      );
     
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
    <Taiyeheader/>
      <div
        className="flex items-center justify-center min-h-screen bg-gray-900 font-[archivo-regular]"
        id="contact"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-[500px] h-[20rem] shadow-md bg- rounded px-8 pt-6 border-2 border-indigo-600 pb-8 mb-4 transform transition-all duration-300 hover:scale-105"
        >
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-2 text-[white]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block  text-[white] text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-[white] text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="border-2 border-indigo-600 hover:bg-[#F7B32B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 transform hover:translate-y-1"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
