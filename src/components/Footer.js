import React from "react";
import * as Icons from "react-icons/si";
import * as twitIcon from "react-icons/bs";
import * as resume from "react-icons/ai";

function Footer() {
  const medias = [
    {
      id: 1,
      src: <Icons.SiGmail />,
      link: "mailto: lakshminarasimhan511@gmail.com",
    },

    {
      id: 2,
      src: <resume.AiOutlineFilePdf />,
      link: "/Lakshmi-Narasimhan-Resume.pdf",
      download: true,
    },

    {
      id: 4,
      src: <twitIcon.BsGithub />,
      link: "https://github.com/Sriram511/",
    },
    {
      id: 5,
      src: <twitIcon.BsLinkedin />,
      link: "https://www.linkedin.com/in/lakshmi-narasimhan-7405221a9/",
    },

    {
      id: 3,
      src: <twitIcon.BsInstagram />,
      link: "https://www.instagram.com/bachelor_of_photographyy/?hl=en",
    },

    {
      id: 6,
      src: <twitIcon.BsTwitter />,
      link: "https://twitter.com/Lakshmi37718277",
    },

    {
      id: 7,
      src: <twitIcon.BsFacebook />,
      link: "https://www.facebook.com/smartsriram.smartsriram/",
    },
  ];

  return (
    <>
      <div
        name="profiles"
        className="flex justify-center text-3xl gap-4 sm:gap-12 w-full h-full py-16 text-gray-500 bg-gradient-to-b from-gray-800 to-black"
      >
        {medias.map(({ id, src, link, download }) => (
          <div
            key={id}
            className={`hover:text-indigo-900 hover:scale-105 duration-200`}
          >
            <a href={link} download={download} target="_blank" rel="noreferrer">
              {src}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Footer;
