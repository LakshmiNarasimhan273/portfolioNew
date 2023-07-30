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
          As a Full-Stack trainer with over 2+ years of experience, I have a
          strong passion for teaching and a deep understanding of both front-end
          and back-end development. I possess comprehensive knowledge of
          programming languages, frameworks, and tools commonly used in
          development. As a trainer, I have successfully designed and delivered
          training programs that cover the entire workflow of development.
          <br />
          <br />I have expertise in front-end technologies such as HTML5, CSS3,
          JavaScript, and popular framework React and state management library
          such as Redux, and CSS Framework Tailwind. I am proficient in back-end
          technologies such as Node.js, along with their respective frameworks
          like Express and Databases like MySql & MongoDB. My training sessions
          are highly interactive and engaging, ensuring that participants are
          actively involved in the learning process. I have a knack for breaking
          down complex concepts into more straightforward, more understandable
          parts, allowing learners to grasp the material effectively.
          Additionally, I provide hands-on coding exercises, projects, and
          real-world examples to reinforce learning and practical application.
          <br />
          <br />
          Throughout my training career, I have received positive feedback from
          participants, highlighting my ability to communicate technical
          concepts clearly and create an inclusive learning environment. I am
          adept at adapting my teaching style to accommodate learners of various
          skill levels, from beginners to advanced developers. I stay updated
          with the latest industry trends, regularly expanding my knowledge and
          incorporating cutting-edge technologies into my training programs. By
          doing so, I ensure that my trainees are equipped with the most
          relevant and up-to-date skills required in the ever-evolving field of
          development.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
