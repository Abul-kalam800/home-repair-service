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
  console.log(_id)

  const handleDelet = (id) => {
    console.log(id);
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
        fetch(`http://localhost:3000/allservices/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaingService = servicesCard?.filter(
                (serviceItem) => serviceItem?._id != id
              );
              setServicesCard(remaingService);
            }

            console.log(data);
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
        <Link to={`/update/${_id}`}>
         
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button onClick={()=>handleDelet(_id)} className="btn btn-primary">
          Delet
        </button>
      </div>
    </div>
  );
};

export default MyserviceCard;
