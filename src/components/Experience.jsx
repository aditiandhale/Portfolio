import React from "react";
import react from "../assets/reactjs.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.jpg";
import postman from "../assets/postman.png";

const Experience = () => {
  const cardItems = [
    {
      id: 1,
      logo: react,
      name: "React.js",
    },
    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: html,
      name: "HTML",
    },
    {
      id: 4,
      logo: css,
      name: "CSS",
    },
    {
      id: 5,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: postman,
      name: "Postman",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 3 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
