import React from "react";

const BookingCard = ({ booking }) => {
  const {
    serviceImage,
    serviceName,
    service_id,
    status,
    providerEmail,
    providerName,
    date,
  } = booking;

  return (
    <div className="bg-base-300 p-5 rounded-2xl w-9/12">
      <div className=" ">
        <img src={serviceImage} alt="img" className="rounded-2xl" />
      </div>
      <p className="text-4xl font-semibold my-5">{serviceName}</p>
      <p><span className="text-lg font-semibold">Id: </span>{service_id}</p>
      <p><span className="text-lg font-semibold">Provider-Email: </span>{providerEmail}</p>
      <p><span className="text-lg font-semibold"> Provider-Name: </span>{providerName}</p>
      <p><span className="text-lg font-semibold">Date: </span>{date}</p>
      <p><span className="text-lg font-semibold">Status: </span>{status}</p>

    </div>
  );
};

export default BookingCard;
