import React from "react";
import eCommerce from "../assets/portfolio/eCommerce.png";
import dashboard from "../assets/portfolio/dashboard.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: eCommerce,
      title: "e-commerce Cart Application",
      style: "shadow-orange-900 ",
    },
    {
      id: 3,
      src: dashboard,
      title: "Employee Status Dashboard",
      style: "shadow-blue-500",
      margin: "mt-6",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-slate-100 py-24 text-slate-800 w-full md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-20 text-slate-500">
            {" "}
            Successfully Completed Project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, style, margin }) => (
            <div
              key={id}
              className={`shadow-md ${style} hover:shadow-slate-800 duration-150 rounded-lg`}
            >
              <img
                src={src}
                alt="Project Overview"
                className={` rounded-md duration-300 hover:scale-105`}
              />
              <div className="text-center font-bold">
                <button
                  className={`w-1/2 uppercase ${margin}  py-10 duration-200 hover:scale-105`}
                >
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
