import { Link } from "react-router-dom";
// import Dashboard from "../../Layout/dashboard";
import UseAuth from "../../Hooks/UseAuth";

const Banner = () => {
  const {user} = UseAuth()
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/GM7hgZ1/task-management-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Let Your Task Done</h1>
            <p className="mb-5">
              The platform aims to enhance and improve task management.
            </p>
            {user ? <Link to="/dashboard"><button className="btn btn-primary text-xl">Lets Explore</button></Link>: <Link to="/signIn"><button className="btn btn-primary text-xl">Lets Explore</button></Link> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
