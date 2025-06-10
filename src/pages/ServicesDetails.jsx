import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContex } from "../Contex/AuthContex";

const ServicesDetails = () => {
  const { user } = use(AuthContex);
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
            Name: {providerName}
          </a>
          <p className="mb-7">Location: {servicesLocation}</p>
        </div>
      </div>

      <img
        src={serviceImage}
        alt=""
        className="object-cover w-full mb-4 h-40 sm:h-96 dark:bg-gray-500 rounded-2xl"
      />

      <h2 className="my-5 text-3xl font-semibold">
        Service Name: {serviceName}
      </h2>
      <p className="text-sm  pb-1">{longDescription}</p>
      <button
        className="btn btn-primary px-10  mt-5 hover:btn-secondary"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>

      {/* modal  */}
      
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className=" ">
            <form method="dialog">
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
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Service Name,</legend>
                  <input
                    name="serviceName"
                    type="text"
                    className="input w-full"
                    defaultValue={serviceName}
                    readOnly
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Service Provider Name
                  </legend>
                  <input
                    name="longDescription"
                    type="textarea"
                    className="input w-full"
                    defaultValue={providerName}
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Service Provider Email
                  </legend>
                  <input
                    name="providerEmail"
                    type="text"
                    className="input w-full"
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Current user Email
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
                  <legend className="fieldset-legend">Current User Name</legend>
                  <input
                    name="providerName"
                    type="text"
                    className="input w-full"
                    defaultValue={user.displayName}
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Price </legend>
                  <input
                    type="text"
                    className="input w-full"
                    defaultValue={price}
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Service Taking Date
                  </legend>
                  <input name="date" type="date" className="input w-full" />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Special Instraction
                  </legend>
                  <input
                    name="special Instraction"
                    type="text"
                    className="input w-full"
                    placeholder="Special Instraction"
                  />
                </fieldset>
              </div>
              <input
                type="submit"
                className="input w-full mt-7 bg-primary cursor-pointer "
                value="Purchase"
              />

              {/* if there is a button in form, it will close the modal */}
              <button className="btn mt-7 bg-red-500" >Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServicesDetails;
