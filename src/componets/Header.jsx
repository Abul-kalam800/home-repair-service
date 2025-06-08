import { use, useContext } from "react";
import { Link } from "react-router";
import { AuthContex } from "../Contex/AuthContex";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your are logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {user && (
              <li>
                <details className="dropdown">
                  <summary>Dashboard</summary>
                  <ul className="menu dropdown-content bg-base-100 z-1 w-52 p-2 shadow-sm">
                    <li>
                      <Link>Add services</Link>
                    </li>
                    <li>
                      <Link>Manage service</Link>
                    </li>
                    <li>
                      <Link>Booked service</Link>
                    </li>
                    <li>
                      <Link>Service-To-Do</Link>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          HomeRepair
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {user && (
            <li>
              <details className="dropdown">
                <summary>Dashboard</summary>
                <ul className="menu dropdown-content bg-base-100 z-1 w-52 p-2 shadow-sm">
                  <li>
                    <Link>Add services</Link>
                  </li>
                  <li>
                    <Link>Manage service</Link>
                  </li>
                  <li>
                    <Link>Booked service</Link>
                  </li>
                  <li>
                    <Link>Service-To-Do</Link>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
            <div className="w-[40px] h-[40px]">
              <img className="rounded-full" src={user.photoURL} alt="photo" />
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/registration" className="btn">
              Registration
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
