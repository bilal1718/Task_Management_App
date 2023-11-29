import React, { useState } from "react";
import axios from 'axios';

export default function AddProject() {
  const [formData, setFormData] = useState({
    projectname: "",
    projectmanager: "",
    email: "",
    priority: "low",
    description: "",
    startdate: "",
    enddate: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ message: "", color: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/contacts', formData);
      console.log('Project created:', response.data);
      setPopupContent({ message: "Project submitted successfully!", color: "green" });
      setShowPopup(true);
    } catch (error) {
      console.error('Error creating project:', error);
      setPopupContent({ message: "Error creating project. Please try again." ,error, color: "red" });
      setShowPopup(true);
    }
  };
    return(
        <>
        <div className="container mx-auto px-4">
  <h1 className="text-xl font-bold text-gray-900">Project Form</h1>
  <form className="mt-4" onSubmit={handleSubmit}>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formData.projectname}
          name="projectname"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-1">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Manager Name
        </label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={formData.projectmanager}
          name="projectmanager"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-1">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-1">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Priority
        </label>
        <select
          id="role"
          onChange={handleChange}
          value={formData.priority}
          name="priority"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
    <div className="mt-4">
      <label
        className="block text-sm font-medium text-gray-700"
      >
        Description
      </label>
      <textarea
        id="description"
        onChange={handleChange}
          value={formData.description}
          name="description"
        rows={4}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Write a brief description of the project"
      />
    </div>
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Start date
        </label>
        <input
          type="date"
          onChange={handleChange}
          value={formData.startdate}
          name="startdate"
          id="start-date"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-1">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          End date
        </label>
        <input
          type="date"
          id="end-date"
          onChange={handleChange}
          value={formData.enddate}
          name="enddate"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <div className="mt-4 flex justify-end">
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  </form>
</div>
{showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white-500 p-4 rounded-md shadow-sm">
            <p className={`text-${popupContent.color} font-semibold mb-2`}>{popupContent.message}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </>
    )
}