import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";
import { GoogleAuthProvider } from "firebase/auth";
import Lottie from "lottie-react";
import registationphoto from '../assets/registration.json'

const Registration = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const registerProvider = new GoogleAuthProvider();
  const { creatUser, googleSign,uptoProfile,setUser,user } = useContext(AuthContex);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

   
    // creat user
    creatUser(email, password)
      .then((result) => {
        
        // updateProfile 
        uptoProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            const userProfile = { ...user, displayName: name, photoURL: photo };
            setUser(userProfile);
        

            navigation(`${location.state ? location.state : "/"}`);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your successfully registerd",
              showConfirmButton: false,

              timer: 1500,
            });
          })
          .catch((error) => {
           
          });
        // aleart successfully
      })
      .catch((error) => {
       Swal.fire({
                position: "top-end",
                icon: "success",
                title: `you are in eeror ${error}`,
                showConfirmButton: false,
                timer: 1500,
              });
      });
  };
  const handleGoogle = () => {
    googleSign(registerProvider)
      .then((result) => {
       
        navigation(`${location.state ? location.state : "/"}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your successfully registerd by google,Thank you",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: `Your are logout successfully ${error}`,
                 showConfirmButton: false,
                 timer: 1500,
               });
      });
  };
  return (
    <div className="my-10 mx-auto flex justify-center items-center lg:flex-row flex-col-reverse ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center">Registration Now!</h1>
        <div className="card-body space-y-4">
          <form onSubmit={handleRegistration} className="form space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholde="Name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Photo URL"
              required
            />
            <div>
              <p className="">
                Already have an account? go to{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4 w-full" type="submit">
              Submit
            </button>
          </form>
          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
      <div>
        <Lottie animationData={registationphoto} loop={true} style={{width: '500px'}}></Lottie>
      </div>
    </div>
  );
};

export default Registration;
