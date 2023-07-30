import React from "react";
import FedevImage from "../assets/me.jpg";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  const text = (
    <Typewriter
      onInit={(typeWriter) => {
        typeWriter
          .typeString("UI Designer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("MERN Stack Trainer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("React Developer")
          .start();
      }}
    />
  );
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b bg-slate-100 text-slate-800"
    >
      <div className="max-w-screen-lg mx-auto pt-12 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-800">
            I'm a {text}
          </h2>

          <p className="text-slate-500 py-4 max-w-md">
            Hi!, i am Familiar with React for building and designing the UI
            Components , I love to work on web application using the
            technologies of MongoDB, Express, React & Node ;
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-5 py-2 flex items-center rounded-md bg-indigo-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <AiIcons.AiOutlineRight size={12} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={FedevImage}
            alt="FrontEnd Developer"
            className="mx-auto rounded-xl w-1/2 md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
