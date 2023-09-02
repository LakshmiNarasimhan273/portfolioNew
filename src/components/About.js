import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-slate-100 text-slate-800">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl text-justify mt-24 text-slate-500">
          👋 Hello, I'm Lakshmi Narasimhan, a passionate and results-driven
          Software Engineer with a strong foundation in web development and a
          focus on creating seamless, user-centric applications. With expertise
          in JavaScript, React, Node.js, Express.js, Nest.js, and MongoDB, I
          thrive in collaborative environments and translate complex technical
          concepts into user-friendly solutions. <br />
          <br />
          💼 Professional Experience: I have 2 years of experience in designing
          and developing robust, scalable web applications. My journey began
          with mastering JavaScript, the language that powers the modern web,
          and quickly evolved as I honed my skills in crafting dynamic user
          interfaces with React. I've successfully contributed to projects
          spanning various industries, from e-commerce to fintech, delivering
          exceptional user experiences through clean code and thoughtful design.
          <br />
          <br />
          🛠️ Technical Proficiencies: <br />
          🔹 JavaScript: My programming language of choice, enabling me to build
          interactive and feature-rich web applications. <br />
          🔹 React.js: A framework I'm deeply familiar with, leveraging its
          component-based architecture to create engaging user interfaces.{" "}
          <br />
          🔹 Node.js: Enabling server-side JavaScript, I've developed backend
          solutions that are performant and efficient. <br />
          🔹Express.js: I've utilized this minimalist web application framework
          to create RESTful APIs and streamline server-side development. <br />
          🔹Nest.js: My expertise extends to this powerful Node.js framework,
          which I've used to build modular and maintainable server-side
          applications. <br />
          🔹 MongoDB: Proficient in using this NoSQL database, I've designed
          database schemas and optimized data retrieval for seamless application
          performance.
        </p>
      </div>
    </div>
  );
};

export default About;
