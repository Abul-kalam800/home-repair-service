import React from "react";
import { Outlet } from "react-router";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Upcoming from "../componets/Upcoming";


const Mainlayouts = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
         <Outlet></Outlet>
      </div>
      <main className="max-w-7xl mx-auto">
        <Upcoming></Upcoming>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayouts;
