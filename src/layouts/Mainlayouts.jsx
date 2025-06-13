import React from "react";
import { Outlet } from "react-router";
import Header from "../componets/Header";
import Footer from "../componets/Footer";


const Mainlayouts = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
         <Outlet></Outlet>
      </div>
      <main className="w-11/12 mx-auto">
       
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayouts;
