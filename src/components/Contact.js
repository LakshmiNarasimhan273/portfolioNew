import React from "react";
import Typewriter from "typewriter-effect";

const Contact = () => {
  const text = (
    <Typewriter
      onInit={(typeWriter) => {
        typeWriter
          .typeString("Send Message")
          .pauseFor(3000)
          .deleteAll()
          .typeString("Send Message...")
          .pauseFor(3000)
          .deleteAll()
          .typeString("Send Message...")
          .pauseFor(3000)
          .deleteAll()
          .typeString("Send Message...")
          .start();
      }}
    />
  );
  return (
    <div name="contact" className="w-full h-full bg-slate-100">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-12">
          <p className="text-4xl font-bold inline text-slate-800 border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-8 text-slate-500">
            Would like to have conversation with Me? Drop your message in the
            form placed below
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/db15f20f-eb95-48d6-b1f7-bd75ddf7e4b0"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 border-slate-500 rounded-md text-slate-600 font-semibold focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your E-mail"
              className="my-3 p-2 bg-transparent border-2 border-slate-500 rounded-md text-slate-600 font-semibold focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your Message"
              rows="10"
              className="p-2 bg-transparent border-2 border-slate-500 rounded-md text-slate-600 font-semibold focus:outline-none"
            ></textarea>
            <button className="text-gray-300 font-semibold mb-0 bg-indigo-900 px-4 py-4 m-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              {text}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
