import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
const PopularServicesCard = ({ service }) => {
  const {
    providerImage,
    providerName,
    serviceImage,
    serviceName,
    price,
    longDescription,
    _id,
  } = service;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 mb-10"
    >
      <img
        src={serviceImage}
        alt=""
        className="object-cover w-full mb-4 h-30 sm:h-96 dark:bg-gray-500"
      />
      <div className="p-6">
        <div className="flex justify-between space-x-4">
          <div className="flex justify-center items-center gap-3">
            <img
              src={providerImage}
              alt="service-img"
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {providerName}
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold ">Price: {price}</p>
          </div>
        </div>
        <h2 className="my-4 text-xl font-semibold">{serviceName}</h2>
        <p className="text-sm dark:text-gray-600 pb-1">
          {longDescription.slice(0, 100)}...
        </p>
        <button>
          {" "}
          <Link to={`allservices/${_id}`} className="btn bg-linear-to-l from-fuchsia-500 to-indigo-500 rounded-full ml-1 mt-3">
            View Details
          </Link>
        </button>
      </div>
    </motion.div>
  );
};

export default PopularServicesCard;
