import React, { use } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { Link } from "react-router";

const MyserviceCard = ({ service }) => {
  const { user } = use(AuthContex);
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };
  return (
    <div className="pb-5 ">
      <div className=" ">
        <img src={serviceImage} alt="" className=" rounded-2xl" />
      </div>
      <p className="text-4xl font-semibold  my-7">{serviceName}</p>
      <img src={providerImage} alt="photo" className="w-12 h-12 rounded-full" />
      <p className="mt-5">
        <span className="font-semibold text-lg">Name : </span>
        {providerName}
      </p>
      <p className="mt-2">
        <span className="font-semibold text-lg">Service Location : </span>{" "}
        {servicesLocation}
      </p>
      <p className="mt-2">
        <span className="font-semibold text-lg">Price : </span> {price}
      </p>

      {/* Edit button  */}
      <div className="flex justify-end gap-6">
       <Link to ={`/update/${_id}`}> <button className="btn btn-primary">Edit</button></Link>
      <button className="btn btn-primary">Delet</button>
      </div>

    </div>
  );
};

export default MyserviceCard;
