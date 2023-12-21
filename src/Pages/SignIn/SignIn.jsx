import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";



const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signinwithGoogle, signIn } = UseAuth()
  const [userPassword, setUserPassword] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!userEmail) {
      new Swal("Email or passwrod does not match");
    } else if (!userPassword) {
      new Swal("Email or passwrod does not match");
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // const user = { email };

        // get acces token
        // axios.post("https://loclahost/5000/api/v1/jwt", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   });




        event.target.reset();
        let userEmail = result.user.email;
        setUserEmail(userEmail);
        let userPassword = result.user.passord;
        setUserPassword(userPassword);
        console.log("success", userEmail, userPassword);
        new Swal("Login Success");
      })
      .catch((error) => {
        console.log(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
      });
    navigate(location?.state ? location.state : "/");
   
  };

  const handleGoogleSignIn = () => {
    signinwithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
    navigate(location?.state ? location.state : "/dashboard");
  };

  return (
    <div className="bg-blue-600 h-screen items-center flex">
      <Helmet>
        <title>FoodHero | Sign in</title>
      </Helmet>
      <div className="hero items-center">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center mt-12 mb-12 font-bold">
              Please Sign In
            </h1>
          </div>
          <div className="card shadow-2xl bg-white">
            <form onSubmit={handleSignin} className="card-body lg:w-[40vw]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="/"
                    className="underline text-blue-600 text-2xl label-text-alt link link-hover"
                  >
                    Skip Now
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                {/* <p onClick={handleGoogleSignIn} className="text-2xl mb-4">Sign in with <span className=" ml-2 underline text-blue-700 font-bold">Google?</span></p> */}
                <p onClick={handleGoogleSignIn} className="text-2xl mb-4">
                  Sign In with
                  <Link className=" ml-2 underline text-blue-700 font-semibold">
                    GOOGLE
                  </Link>
                </p>
                <p className="text-2xl mb-4">
                  Do not have account? Please
                  <Link
                    className=" ml-2 underline text-blue-700 font-semibold"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
                <button className="text-white font-bold btn bg-blue-600">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
