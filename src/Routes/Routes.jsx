import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
// import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },       
    ]
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'userProfile',
    element: <UserProfile></UserProfile>
  }
]);
export default router;