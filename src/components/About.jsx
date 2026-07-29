import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      {/* About */}
      <p className="text-left">
        Hello, I'm Aditi, a passionate Frontend Developer with 3.8 years of
        experience in building responsive, scalable, and user-friendly web
        applications using React.js, JavaScript, HTML5, CSS3, and Material UI.
        With a strong background in frontend development, I enjoy creating
        clean, maintainable, and high-performance applications that deliver an
        excellent user experience.
      </p>

      {/* Education */}
      <div className="mt-10">
        <h2 className="text-green-600 text-2xl font-semibold mb-4">
          Education
        </h2>

        <div className="space-y-1 ">
          <p className="font-medium">
            Bachelor of Engineering (B.E.) in Computer Engineering
          </p>
          <p>Pravara Rural Engineering College, Pravaranagar</p>
          <p>
            Affiliated with Savitribai Phule Pune University (SPPU)
          </p>
          <p>Graduated: 2021</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="text-green-600 text-2xl font-semibold mb-4">
          Skills & Expertise
        </h2>

        <p className="text-left">
          Proficient in React.js, JavaScript (ES6+), HTML5, CSS3, Material UI,
          Tailwind CSS, Next.js, REST API integration, Git, GitHub, MySQL,
          MongoDB, Django, and Postman. Experienced in developing responsive web
          applications, optimizing application performance, writing clean and
          maintainable code, and collaborating effectively within Agile teams.
        </p>
      </div>

      {/* Experience */}
      <div className="mt-10">
        <h2 className="text-green-600 text-2xl font-semibold mb-4">
          Professional Experience
        </h2>

        <h3 className="text-xl font-semibold">
          Frontend React Developer
        </h3>

        <p className="text-gray-600 mb-4">
          GS Lab, Pune | December 2021 – August 2025
        </p>

        <p className="text-left">
          Worked as a Frontend React Developer, building responsive and
          user-friendly web applications using React.js, JavaScript, HTML5,
          CSS3, and Material UI. Collaborated with cross-functional teams to
          develop new features, integrate REST APIs, optimize application
          performance, and resolve bugs. Gained backend development experience
          with Django by creating and maintaining REST APIs, testing endpoints
          using Postman, and integrating frontend applications with backend
          services. Focused on delivering high-quality, scalable solutions while
          following Agile development practices.
        </p>
      </div>

      {/* Mission */}
      <div className="mt-10">
        <h2 className="text-green-600 text-2xl font-semibold mb-4">
          Mission Statement
        </h2>

        <p className="text-left">
          My mission is to build intuitive, scalable, and high-performance web
          applications that provide exceptional user experiences. I strive to
          write clean, maintainable code, continuously improve my technical
          skills, and embrace new technologies to solve real-world challenges.
          Through collaboration, innovation, and continuous learning, I aim to
          contribute to impactful digital products while growing as a Frontend
          Developer.
        </p>
      </div>
    </div>
  );
};

export default About;