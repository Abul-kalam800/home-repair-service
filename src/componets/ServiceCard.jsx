import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    providerImage,
    providerName,
    serviceImage,
    serviceName,
    price,
    longDescription,
    _id,
    servicesLocation,
  } = service;
  return (
    <div className="flex flex-col lg:flex-row  gap-7  rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 p-5">
      
      <div className="w-full md:w-5/12 ">
        <img
          src={serviceImage}
          alt=""
          className="object-cover w-full mb-4 h-56 sm:h-56 dark:bg-gray-500"
        />
      </div>
      <div className="w-full lg:w-7/12 px-7 ">
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
              <p>{servicesLocation}</p>
            </div>
          </div>
          <div>
            <p className="font-bold ">Price: {price}</p>
          </div>
        </div>
        <h2 className="my-5 text-xl font-semibold">{serviceName}</h2>
        <p className="text-sm dark:text-gray-600 pb-1">
          {longDescription.slice(0, 100)}... 
        </p>
         <Link to={`/allservices/${_id}`}
            className="btn bg-pink-400 rounded-md  px-10  mt-5 "
          >
            View Details
          </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
