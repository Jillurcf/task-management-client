import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = UseAuth();
  return (
    <div>
      <Helmet>
        <title>FoodHero | User Profile</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/MfpXKvk/Profile.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={user?.photoURL}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Name: {user?.displayName}</h1>
                  <p className="py-6">
                  Email: {user?.email}
                  </p>
                  <p className="py-6">
                  Creation Time: {user?.metadata.creationTime}
                  </p>
                  <p className="py-6">
                 Last Login time: {user?.metadata.lastSignInTime}
                  </p>
                  <button className="btn btn-primary"><Link to='/'>Back to Home</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
