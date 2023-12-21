import { FaHome, FaTrophy, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import UseAuth from "../Hooks/useAuth";

const Dashboard = () => {

  const { user } = UseAuth()

 

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className=" w-64 min-h-screen bg-blue-400">
        <ul className="menu p-4">
          
            <>
              <li>
                <NavLink to="/dashboard">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeUsers">
                  <FaUsers></FaUsers>
                  Create Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageContests">
                  <FaTrophy></FaTrophy>
                  Manage task
                </NavLink>
              </li>
              <div className="divider">OR</div>
              <li>
                <NavLink to="/userProfile">
                  <FaUsers></FaUsers>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </>
         
            
        
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
