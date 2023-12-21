// import { useContext} from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation();
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
      
};


export default PrivateRoute;