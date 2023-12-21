import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {
    return (
        <div className="">
            <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;