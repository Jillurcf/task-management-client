import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { motion } from "framer-motion";


const NavBar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-blue-600 text-white font-bold"
              : "text-blue-300 font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoodItems"
          className={({ isActive, isPending }) =>
          isPending
          ? "pending"
          : isActive
          ? "bg-blue-600 text-white font-bold"
          : "text-blue-300 font-bold"
          }
        >
          All Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
          isPending
          ? "pending"
          : isActive
          ? "bg-blue-600 text-white font-bold"
          : "text-blue-300 font-bold"
        
          }
        >
          Dashboard
        </NavLink>
      </li>

     
    </>
  );

  const handleLogOut = () => {
    loggedOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
      <div className="max-w-screen-xl mx-auto pt-8 z-40">
        <div className="navbar opacity-80">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost text-blue-600 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="w-24"
            >
            </motion.a>
            <motion.h1
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="px-2 text-3xl text-blue-600 font-extrabold"
            >
              YourTask
            </motion.h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>

          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown z-30 dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {/* <h1 className="text-center text-blue-600 font-bold">User Profile</h1> */}
                  {/* <li>
                    <button className="btn btn-sm btn-secondary">
                   <Link to='/userProfile'> View Profile</Link>
                    </button>
                  </li> */}
                  <li>
                    <button className="btn btn-sm btn-ghost">
                     Name: {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-sm btn-ghost">
                   dashboard
                    </button>
                  </li>
                 
                  <li>
                    <button
                      className="btn btn-sm btn-ghost mt-4"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">
                <button className="btn bg-blue-600 border-none rounded-7xl text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        
        </div>
       
      </div>
   
  );
};

export default NavBar;
