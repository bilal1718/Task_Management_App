import React from "react";
import { Link } from "react-router-dom";
export default function Hero(){
    return(
        <main>
      <section>
        <div className="bg-gray-100 sm:grid grid-cols-2 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
          <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
            <div className="ml-20 w-80">
              <h2 className="text-white text-4xl">ProTask: Streamlining Your Workflow</h2>
              <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">
              Simplify your workflow, collaborate seamlessly, and achieve more with our intuitive task management system.
              </p>
              <Link
                to="/projects"
                className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
              >
                Add Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    )
}