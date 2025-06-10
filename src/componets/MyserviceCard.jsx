import React from "react";

const MyserviceCard = ({ service }) => {
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
    <div className="pb-5 ">
      <div className=" ">
        <img src={serviceImage} alt="" className=" rounded-2xl" />
      </div>
      <p className="text-4xl font-semibold  my-7">{serviceName}</p>
      <img src={providerImage} alt="photo" className="w-12 h-12 rounded-full" />
      <p>
        <span className="font-semibold">Name : </span>
        {providerName}
      </p>
      <p>
        <span className="font-semibold">Service Location:</span> {servicesLocation}
      </p>
      <p>
        <span className="font-semibold">Price :</span> {price}
      </p>
      <div className="flex gap-5 justify-end">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-primary">Delet</button>
      </div>
    </div>
  );
};

export default MyserviceCard;
