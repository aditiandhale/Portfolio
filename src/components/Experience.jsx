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
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 justify-center"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 3+ years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center
                 border-2 rounded-2xl shadow-md
                 w-full h-40 md:h-52
                 p-4
                 hover:scale-105 transition duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain"
              />
              <h3 className="mt-3 text-center font-medium">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
