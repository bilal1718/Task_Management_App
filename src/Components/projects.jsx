import React, { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import Navbar from "./navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/contacts")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      {/* component */}
      <link
        rel="stylesheet"
        href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css"
      />
      <div className="flex flex-wrap justify-center items-center">
        {/* Add a container div with grid display and gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-center items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
            >
              <div className="relative flex flex-col items-center rounded-[20px] w-[300px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                  <h4 className="uppercase px-2 text-2xl font-bold text-navy-700 dark:text-white">
                    {project.projectname}
                  </h4>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
               </svg>
                    {project.startdate}
                 </span>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                  <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Project Manager</p>
                    <p className="capitalize text-base font-medium text-navy-700 dark:text-white">
                      {project.projectmanager}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="overflow-auto	capitalize text-base font-medium text-navy-700 dark:text-white">
                      {project.email}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Priority</p>
                    <p className="capitalize text-base font-medium text-navy-700 dark:text-white">
                      {project.priority}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Description</p>
                    <p className="capitalize text-base font-medium text-navy-700 dark:text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
