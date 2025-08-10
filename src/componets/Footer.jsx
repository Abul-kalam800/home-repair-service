import React from "react";
import logo from "../assets/logohomeservices1.png";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer  bg-base-200 text-base-content p-10">
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 md:gap-x-12 gap-5  items-center justify-between ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[300px]" />
          </Link>
          <nav >
              <h3 className="footer-title">Dasboard Pages</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <NavLink to="/addservices">Add services</NavLink>
              </li>
               <li>
                    <NavLink to='/manageservice'>Manage service</NavLink>
                  </li>
                  <li>
                    <NavLink to='/booking'>Booked service</NavLink>
                  </li>
                  <li>
                    <NavLink to='/viewbooking'>Service-To-Do</NavLink>
                  </li>
            </ul>
          </nav>

          <div>
            <h3 className="footer-title">Social Links</h3>
            <ul className="flex justify-center items-center gap-5 mt-10">
              <li>
                <Link
                  to="https://www.facebook.com/bd.abulkalam800"
                  className="text-blue-500"
                >
                  <FaFacebookF size={30} />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/mohammad-abul-kalam-226779303/"
                  className="text-blue-500"
                >
                  <FaLinkedinIn size={30} />{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@AbulKalam-800"
                  className="text-blue-500"
                >
                  <FaYoutube size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-base-300 py-10">
        <p className=" text-center ">
          <span>Copyright: All rights reserved by Ak.services 2025 </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
