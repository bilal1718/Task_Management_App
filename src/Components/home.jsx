import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";

const Home = () => {
  return (
    <div>
   <Navbar />
   <Hero />
   <Outlet />
    </div>
  )
};

export default Home;