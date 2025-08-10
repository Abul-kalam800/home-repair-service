import React, { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyserviceCard = ({ service, setServicesCard, servicesCard }) => {
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

  const handleDelet = (id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://homerepairservices-server.vercel.app/allservices/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaingService = servicesCard?.filter(
                (serviceItem) => serviceItem?._id != id
              );
              setServicesCard(remaingService);
            }

           
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your Services has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="pb-5 bg-base-200 ">
      <div className=" ">
        <img src={serviceImage} alt="" className=" rounded-2xl" />
      </div>
      <div className="pl-5">
        <p className="my-4 text-xl md:text-2xl font-semibold">{serviceName}</p>
        <img
          src={providerImage}
          alt="photo"
          className="w-12 h-12 rounded-full"
        />
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
      </div>

      {/* Edit button  */}
      <div className="flex md:justify-end gap-6 flex-col mt-5">
        <Link to={`/update/${_id}`}>
          <button className="btn bg-pink-400 rounded-md  w-full">EDIT</button>
        </Link>
        <button
          onClick={() => handleDelet(_id)}
          className="btn bg-linear-to-t from-fuchsia-500 to-indigo-500 rounded-2xl w-full"
        >
          DELET
        </button>
      </div>
    </div>
  );
};

export default MyserviceCard;
