import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-gray-900 text-primary-content">
        <aside>
         
          <p className="font-bold text-blue-600 text-4xl">
            Task Management Platform
          </p>
          <div>
            <ul className="flex gap-3">
              <li className="">
                <NavLink className="underline hover:bg-blue-600" to="/">
                  Home
                </NavLink>
              </li>
             
              <li className="">
                <NavLink className="underline hover:bg-blue-600" to="/allFoodItems">
                  All Task
                </NavLink>
              </li>
              <li className="">
                <NavLink className="underline hover:bg-blue-600" to="/contactus">
               Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="https://www.linkedin.com/in/jillur-rahman-tushar">
             <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://github.com" target="_blank">
             <FaGithub></FaGithub>
            </a>
            <a href="https://www.facebook.com/groups/scic8" target="_blank">
             <FaFacebook></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
