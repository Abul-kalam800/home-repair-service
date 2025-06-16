import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { useLoaderData } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContex);

  const {
    providerImage,
    providerName,
    serviceImage,
    serviceName,
    price,
    longDescription,
    _id,
    servicesLocation,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdateData = Object.fromEntries(formData.entries());
    console.log(UpdateData);

    axios
      .put(`https://homerepairservices-server.vercel.app/allservices/${_id}`, UpdateData)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Update has been successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" max-w-7xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-semibold my-4 text-center">
        Update Service As You want
      </h3>
      <div className="md:p-20 p-5">
        <form onSubmit={handleUpdate}>
          <div className=" grid md:grid-cols-2 gap-5 ">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Image URL of the Service
              </legend>
              <input
                name="serviceImage"
                type="text"
                className="input w-full"
                defaultValue={serviceImage}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Service Name,</legend>
              <input
                name="serviceName"
                type="text"
                className="input w-full"
                defaultValue={serviceName}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Service Description,</legend>
              <input
                name="longDescription"
                type="text"
                className="input w-full"
                defaultValue={longDescription}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Service Location</legend>
              <input
                name="servicesLocation"
                type="text"
                className="input w-full"
                defaultValue={servicesLocation}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price </legend>
              <input
                name="price"
                type="text"
                className="input w-full"
                defaultValue={price}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Service Provider image
              </legend>
              <input
                name="providerImage"
                type="text"
                className="input w-full"
                defaultValue={user.photoURL}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Service provider Email
              </legend>
              <input
                name="providrEmail"
                type="text"
                className="input w-full"
                defaultValue={user.email}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Service Provider Name</legend>
              <input
                name="providerName"
                type="text"
                className="input w-full"
                defaultValue={user.displayName}
                readOnly
              />
            </fieldset>
          </div>

          <input
            type="submit"
            className="input w-full mt-7 bg-linear-to-l from-fuchsia-500 to-indigo-500 rounded-full cursor-pointer text-white "
            value="UPDATE"
          />

          {/* if there is a button in form, it will close the modal */}
        </form>
      </div>
    </div>
  );
};

export default Update;
