import React, { use } from "react";
import { AuthContex } from "../Contex/AuthContex";

const Addservices = () => {
  const { user } = use(AuthContex);
  const handleAddservice = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const allFormData = Object.fromEntries(formData.entries());
    console.log(allFormData);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-5xl font-semibold text-center mt-10">Add Services</h2>
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
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service Name,</legend>
            <input
              name="serviceName"
              type="text"
              className="input w-full"
              placeholder="Service Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Price </legend>
            <input type="text" className="input w-full" placeholder="Price" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service Area</legend>
            <input
              name="serviceArea"
              type="text"
              className="input w-full"
              placeholder="Service Area"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <input
              name="longDescription"
              type="textarea"
              className="input w-full"
              placeholder="Description"
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
          className="input w-full mt-7 bg-primary cursor-pointer "
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default Addservices;
