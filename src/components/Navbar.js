import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      link: "profiles",
    },
  ];

  return (
    <div className="flex justify-between  items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-3xl italic font-signature ml-3 text-indigo-500">
          SLNarasimhan
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 uppercase text-sm cursor-pointer font-semibold text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaIcons.FaTimes size={25} /> : <FaIcons.FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute w-full h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-semibold uppercase py-4 text-3xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
