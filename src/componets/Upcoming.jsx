import React from "react";
import cupolsofa from "../assets/cuple_sofa.jpg";
import clener from "../assets/cleaing.jpg";
import { motion } from "motion/react";

const Upcoming = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-100%" }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      className="mb-20"
    >
      <h3 className="text-5xl text-center mt-20"> <motion.span 
            animate={{
                color:['#0f1be8','#f8cd0b','#0bf8df'], 
                 transition:{duration:3, repeat:Infinity}
                }}>Upcoming</motion.span> our Services</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7 mt-20">
        <div className="bg-base-300 p-5 rounded-2xl">
          <div className="w-full">
            <img src={clener} alt="cleaner" className="rounded-lg" />
          </div>
          <h3 className="text-2xl font-semibold mt-10">Cleanig service</h3>
          <p className="mt-5">
            Our special cleaners team will come aftewer next month.If you need
            this service please contact with us{" "}
          </p>
        </div>
        <div className="bg-base-300 p-5 rounded-2xl">
          <div className="">
            <img src={cupolsofa} alt="cuplesofa" className="rounded-lg" />
          </div>
          <h3 className="text-2xl font-semibold mt-10">Cupol sofa Service</h3>
          <p className="mt-5">
            Cuople sofa service team also coming next week, We will start our
            sofa and home others item wil be serve{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Upcoming;
