import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const ServicesDetails = () => {
  const singleService = useLoaderData();
  console.log(singleService);
  const {
    providerImage,
    providerName,
    serviceImage,
    serviceName,
    price,
    longDescription,
    _id,
    servicesLocation,
  } = singleService;
  return (
    <div className="w-11/12 mx-auto my-10">
    
        <h3 className="text-2xl font-semibold mb-7">
          Service Provider Informetaion
        </h3>
        <div className="flex  gap-3">
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
            <p className="mb-7">Location: {servicesLocation}</p>
          </div>
        </div>
    

      <img
        src={serviceImage}
        alt=""
        className="object-cover w-full mb-4 h-40 sm:h-96 dark:bg-gray-500 rounded-2xl"
      />

      <h2 className="my-5 text-2xl font-semibold">{serviceName}</h2>
      <p className="text-sm  pb-1">{longDescription}</p>
      <Link
        to={`services/${_id}`}
        className="btn btn-primary px-10  mt-5 hover:btn-secondary"
      >
        Book Now
      </Link>
    </div>
  );
};

export default ServicesDetails;
