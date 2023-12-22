import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
// import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Dashboard from "../Layout/dashboard";
import PrivateRoute from "./PrivateRoute";
import Addtask from "../Pages/DashBoard/AddContest/Addtask";
import ManageTask from "../Pages/DashBoard/ManageContests/ManageTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "addTask",
        element: <Addtask></Addtask>,
      },
      {
        path: "manageTask",
        element: <ManageTask></ManageTask>,
      },
    ]
  },
 
  {
    path: "signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "userProfile",
    element: <UserProfile></UserProfile>,
  },
]);
export default router;
