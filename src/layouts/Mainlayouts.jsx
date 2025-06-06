import React from "react";
import { Outlet } from "react-router";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import PopularService from "../componets/PopularService";

const Mainlayouts = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <main className="w-11/12 mx-auto">
        <PopularService></PopularService>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayouts;
