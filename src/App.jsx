import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Projects from "./Components/projects";
import Tasks from "./Components/task";
import Dashboard from "./Components/dashboard"
import Form from "./Components/form";
import AddProject from "./Components/addProject";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addProject" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}