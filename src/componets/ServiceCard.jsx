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
    <div className="flex flex-col space-y-3 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 mb-5">
      <div className=" ">
        <img
          src={serviceImage}
          alt=""
          className="object-cover w-full mb-4 h-40 sm:h-96 dark:bg-gray-500"
        />
      </div>
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
          <Link to={`services/${_id}`}
            className="btn btn-primary px-10 md:ml-4 mt-5 hover:btn-secondary"
          >
            View Details
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
