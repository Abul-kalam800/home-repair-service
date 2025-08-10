import React, { use } from "react";
import PopularServicesCard from "./PopularServicesCard";
import { Link } from "react-router";
import { motion } from "motion/react";

const PopularService = ({ servicesPromies }) => {
  const services = use(servicesPromies);

  return (
    <div>
      <h2 className="text-5xl text-center  mt-20">
       <motion.span
            animate={{
                color:['#0f1be8','#f8cd0b','#0bf8df'], 
                 transition:{duration:3, repeat:Infinity}
                }}>  Popular</motion.span> service
      </h2>
       <div
  
    
        className="my-14 grid grid-cols-1 lg:grid-cols-3 gap-7
            "
      >
        {services.map((service) => (
          <PopularServicesCard
            key={service._id}
            service={service}
          ></PopularServicesCard>
        ))}
      </div>
      <div className="max-w-7xl flex justify-center mx-auto mb-10">
        <Link to="/allservices">
          <button className="btn bg-pink-400 rounded-md rounded-full ">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
