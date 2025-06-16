import React from "react";
import photo1 from "../assets/review/review1.jpg";
import photo2 from "../assets/review/review2.jpg";
import photo3 from "../assets/review/review3.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "motion/react";

const Review = () => {
  return (
    <div className="my-40">
      <h2 className="text-2xl lg:text-5xl text-center font-semibold my-30">
        Our Client{" "}
        <motion.span
          animate={{
            color: ["#0f1be8", "#f8cd0b", "#0bf8df"],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          feedback
        </motion.span>
      </h2>

      <div className="flex  lg:flex-row  flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, translateY: 0, overflow: "hidden" }}
          className="p-10  bg-linear-to-t from-cyan-100 to-yellow-300 rounded-2xl text-black"
        >
          <img
            className="w-30 h-30 rounded-full object-cover "
            src={photo1}
            alt=""
          />
          <h3 className="text-3xl font-semibold my-4">Jony Ahmed</h3>
          <p className="my-5">
            <FaQuoteLeft size={35} opacity={0.2} /> I'am varry happy for this
            service , They give professonaly work no debout so I'am very happy
            Next time I will agin take this service.........
          </p>
          <div className="flex justify-end">
            <FaQuoteRight size={35} opacity={0.2} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, translateY: 0, overflow: "hidden" }}
          className="p-10  bg-linear-to-t from-emerald-100 to-violet-400 rounded-2xl text-black"
        >
       
          <img
            className="w-30 h-30 rounded-full object-cover "
            src={photo2}
            alt=""
          />
          <h3 className="text-3xl font-semibold my-4">Rayhan Kobir</h3>
          <p className="my-5">
            {" "}
            <FaQuoteLeft size={35} opacity={0.2} />
            I'am varry happy for this service ,I like them work they are very
            good service provider i am satisfied service .............
          </p>
          <div className="flex justify-end">
            <FaQuoteRight size={35} opacity={0.2} />
          </div>
      </motion.div>
       <motion.div
          initial={{ opacity: 0, translateX: "100%" }}
          transition={{ duration: 2 }}
             whileInView={{ opacity: 1, translateX: 0, overflow: "hidden" }}
          className="p-10  bg-linear-to-t from-fuchsia-300 to-indigo-300 rounded-2xl text-black"
        >
    
          <img
            className="w-30 h-30 rounded-full object-cover "
            src={photo3}
            alt=""
          />
          <h3 className="text-3xl font-semibold my-4">Sonia Akter</h3>
          <p className="my-5">
            {" "}
            <FaQuoteLeft size={35} opacity={0.2} />
            I'am varry happy for this service , They give professonaly work no
            debout so I'am very happy Next time I will agin take this service............
          </p>
          <div className="flex justify-end">
            <FaQuoteRight size={35} opacity={0.2} />
          </div>
      
        </motion.div>
    </div>
</div>)}

export default Review;
