import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
             <header>
      <nav className="shadow">
        <div className="flex justify-between items-center py-2 px-10 container mx-auto">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
              Task Manager
            </h1>
          </div>
          <div>
            <div className="hover:cursor-pointer sm:hidden">
              <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
              <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
              <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
            </div>
            <div className="flex items-center">
              <ul className="sm:flex space-x-4  items-center">
                <li>
                  <a>
                  <Link to="/projects"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Projects
                  </Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Tasks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">
                  LOGIN
                </h1>
               <Link to="/form">
                <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">
                  SIGNUP
                </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
        </div>
    )
}