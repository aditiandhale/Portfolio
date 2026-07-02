import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "HRMS - Human Resourse Management System",
      description:
        " Developed a Human Resource Management System (HRMS) using React.js and Django, automating HR processes for 200+ employees. Built and integrated REST APIs, tested endpoints with Postman, and collaborated in an Agile environment using Git to deliver scalable and maintainable solutions.",
    },

    {
      id: 2,
      name: "VMS - Visitor Management System",
      description:
        "Built a Visitor Management System (VMS) from scratch using React.js and Material UI, featuring complete CRUD operations, camera capture, file uploads, and real-time Twilio WhatsApp notifications. Developed reusable components, integrated REST APIs, and delivered a scalable, user-friendly solution that streamlined visitor management and improved operational efficiency.",
    },

    {
      id: 3,
      name: "Zif 5.x Engineering",
      description:
        "Developed an enterprise log and time-series analytics platform using React.js and Next.js, delivering interactive dashboards and advanced data visualizations for 50+ enterprise clients. Built scalable features, integrated REST APIs, optimized application performance through memoization, and owned end-to-end dashboard development from design to deployment.",
    },

    {
      id: 4,
      name: "EMS - Employee Management System",
      description:
        "Built an Employee Management System (EMS) as a personal project using React.js to streamline employee task management and progress tracking. The application allows managers to assign tasks, monitor their status (Pending, In Progress, Completed, and Fulfilled), update employee details, and efficiently track overall work progress through a simple and intuitive interface.",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      {" "}
      <div>
        {" "}
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>{" "}
        <span className="underline font-semibold">Featured Projects</span>{" "}
      </div>{" "}
      {/* Add this grid wrapper */}{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {" "}
        {projects.map(({ id, name, description }) => (
          <div
            key={id}
            className="border-2 rounded-lg shadow-lg p-5 hover:scale-105 duration-300"
          >
            {" "}
            <h2 className="font-bold text-xl mb-3">{name}</h2>{" "}
            <p className="text-gray-700">{description}</p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Portfolio;
