import React from "react";
import * as Icons from "react-icons/si";
import * as twitIcon from "react-icons/bs";

function Footer() {
  const medias = [
    {
      id: 1,
      src: <twitIcon.BsGithub />,
      link: "https://github.com/Sriram511/",
      style: "text-gray-100",
    },

    {
      id: 2,
      src: <Icons.SiGmail />,
      link: "mailto: lakshminarasimhan511@gmail.com",
      style: "text-red-600",
    },

    {
      id: 4,
      src: <twitIcon.BsLinkedin />,
      link: "https://www.linkedin.com/in/lakshmi-narasimhan-7405221a9/",
      style: "text-sky-600",
    },

    {
      id: 5,
      src: <twitIcon.BsTwitter />,
      link: "https://twitter.com/Lakshmi37718277",
      style: "text-sky-400",
    },

    {
      id: 6,
      src: <twitIcon.BsInstagram />,
      link: "https://www.instagram.com/bachelor_of_photographyy/?hl=en",
      style: "text-pink-500",
    },

    {
      id: 7,
      src: <twitIcon.BsFacebook />,
      link: "https://www.facebook.com/smartsriram.smartsriram/",
      style: "text-blue-600",
    },
  ];

  return (
    <>
      <div className=" bg-gradient-to-b from-gray-800 to-black">
        <div
          name="profiles"
          className="flex justify-center text-3xl gap-6 sm:gap-12 w-full h-full py-16 text-gray-500"
        >
          {medias.map(({ id, src, link, download, style }) => (
            <div key={id} className={`hover:scale-105 ${style} duration-200`}>
              <a
                href={link}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {src}
              </a>
            </div>
          ))}
        </div>
        <div className="text-gray-700 py-6 max-w-screen-lg mx-auto border-t-2 border-gray-700">
          <div className="text-sm font-bold md:text-md flex pt-2 justify-center">
            <p>
              2022 - Present | Developed & Maintaining by Lakshmi Narasimhan
            </p>
          </div>
          <div className="text-sm font-bold md:text-md flex justify-center">
            <p>Last Updated on 29-03-2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
