import React, { use } from "react";
import { AuthContex } from "../Contex/AuthContex";
import axios from "axios";
import Swal from "sweetalert2";


const Addservices = () => {
  const { user } = use(AuthContex);
  const handleAddservice = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const allFormData = Object.fromEntries(formData.entries());
    const newService = allFormData;
    axios
      .post("https://homerepairservices-server.vercel.app/allservices", newService)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your are successfully added services",
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
   
     
    <div className="max-w-7xl mx-auto">

        <title>Add-services </title>
     
      <h2 className="text-3xl md:text-5xl font-semibold text-center mt-10">Add Services</h2>
      <p className="mt-8 text-lg text-center md:w-8/12 mx-auto">Add your Best service whice section you are expert, Our website just help you publish your skills and service. So Add service what you want so add that on.</p>
      <form onSubmit={handleAddservice} className="p-5 md:p-30">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Image URL of the Service
            </legend>
            <input
              name="serviceImage"
              type="text"
              className="input w-full"
              placeholder="Image URL"
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service Name,</legend>
            <input
              name="serviceName"
              type="text"
              className="input w-full"
              placeholder="Service Name"
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Price </legend>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Price"
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service Area</legend>
            <input
              name="servicesLocation"
              type="text"
              className="input w-full"
              placeholder="Service Area"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <input
              name="longDescription"
              type="textarea"
              className="input w-full"
              placeholder="Description"
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service Provider Image</legend>
            <input
              name="providerImage"
              type="text"
              className="input w-full"
              defaultValue={user.photoURL}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service Provider Email</legend>
            <input
              name="providrEmail"
              type="text"
              className="input w-full"
              defaultValue={user.email}
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service provider Name</legend>
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
          className="input w-full mt-7 bg-linear-to-l from-fuchsia-400 to-indigo-500 rounded-full text-white font-semibold text-xl cursor-pointer "
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default Addservices;
