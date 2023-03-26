import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-24 text-gray-200">
          Hi!, I'm currently working on Software Trainer at Achariya Infotech
          organization and holding a
          <span className="font-bold text-2xl">1.7 years </span>of IT
          expereience and i completed my B.C.A graduation at Bharadhidasan
          University and am currently pursuing M.C.A degree at Anna University.
          These two majors are only focused on Computer Applications. Except for
          College Studies, am completed certificate course in
          <b> Full Stack Development Course </b> that contains (HTML, CSS,
          JavaScript, NodeJS, ReactJS, SQL & MongoDB) ; and i have some
          knowledge in <b>React-Native</b> also.
        </p>
        <br />
        <p className="text-xl text-gray-200">
          Am self-motivated and code-addicted too. I like to learn new things
          every day and my passion is doing Photography I have an Instagram
          profile for this also. If you had some free times. Please visit my
          Instagram page
          <a
            href="https://www.instagram.com/bachelor_of_photographyy/"
            className="inline border-b-2 border-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            bachelor_of_photographyy
          </a>
          .
          <br />
          My Life principle is simple
          <strong className="uppercase">
            "Whatever happen will happen so keep smile : ) and move on".....
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
