import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../assets/Aditi.JPG";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Passionate Frontend Developer with 3.8 years of experience
              building responsive and user-friendly web applications using
              React.js, JavaScript, HTML, CSS, and Material UI. Experienced in
              developing scalable interfaces, integrating REST APIs, and
              creating clean, maintainable code with a focus on performance and
              user experience. Always eager to learn new technologies and
              contribute to impactful, high-quality digital products.
            </p>
            <br />
            {/* Social Media Icons */}
            {/* Social Media Icons */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 flex flex-col items-center">
                <h1 className="font-bold">Available on</h1>

                <ul className="flex justify-center space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aditi-andhale-84a7a620b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/aditiandhale"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 flex flex-col items-center">
                <h1 className="font-bold">Currently working on</h1>

                <div className="flex justify-center space-x-5">
                  <SiMongodb className="text-3xl hover:scale-110 duration-200 rounded-full border-2" />
                  <SiExpress className="text-3xl hover:scale-110 duration-200 rounded-full border-2" />
                  <FaReact className="text-3xl hover:scale-110 duration-200 rounded-full border-2" />
                  <FaNodeJs className="text-3xl hover:scale-110 duration-200 rounded-full border-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="md: h-[450px] md: w-[450px]  rounded-full "
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
