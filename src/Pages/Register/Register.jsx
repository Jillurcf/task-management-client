import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, user } = UseAuth()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    if (password.length < 6) {
      new Swal("The password is less than 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    } else if (!/[!@#$%^&*]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    }


// createUser(email, password)
// .then((result) => {
 
  // console.log(loggedInuser);
  // 
  // 
//   })
// })
// .then((error) => {
//   console.log(error);
// });


    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const loggedInuser = result.user;
        const user = {email};
        axios.post('https://task-management-platform-server-iota.vercel.app/api/v1/jwt', user, {withCredentials: true})
  
      // navigate(location?.state ? location?.state : '/')
 
        

        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://i.ibb.co/BKnRMYC/Profile-Jillur.png",
        })
          .then(() => console.log("profile updated"))
          .catch();

        const createdAt = result.user?.metadata.creationTime;

        const duser = { email, password, createdAt: createdAt };
        fetch("https://task-management-platform-server-iota.vercel.app/api/v1/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(duser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(data);
              console.log("user added to the database");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });

    e.target.reset();

    // const user = { email, createdAt: createdAt };

    new Swal("Registration SuccessFull");
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="hero min-h-screen bg-blue-600">
      <Helmet>
            <title>Your Task | Registration</title>
            </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center flex-[1] lg:text-left">
         {/* <img src={registerImage} alt="" /> */}
        </div>
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-blue-900 text-center font-bold text-3xl">Please Register Here</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phot</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Yout photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
                <a href="/" className="underline text-blue-600 text-2xl label-text-alt link link-hover">
                  Skip Now
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <p className="text-2xl mb-4">
                Already have an account? Please
                <Link
                  className="ml-2 underline text-blue-700 font-semibold"
                  to="/signin"
                >
                  Sign In
                </Link>
              </p>
              <button className="btn bg-blue-600 text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
