import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContex } from "../Contex/AuthContex";
import axios from "axios";
import Swal from "sweetalert2";
import "../index.css";

const ServicesDetails = () => {
  const { user } = use(AuthContex);
  const singleService = useLoaderData();
  const {
    providerImage,
    providerName,
    serviceImage,
    serviceName,
    price,
    longDescription,
    _id,
    providrEmail,
    servicesLocation,
  } = singleService;

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const allFormData = Object.fromEntries(formData.entries());
    console.log(allFormData);
    axios
      .post("https://homerepairservices-server.vercel.app/booking", allFormData)
      .then((res) => {
        document.getElementById('my_modal_5').close();
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your are successfully purchase",
            showConfirmButton: false,
             timer: 1500,
          });
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto my-10">
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

      <dialog id="my_modal_5" className="modal z-9999 ">
        <div className="modal-box max-w-7xlmax-w-5xl">
          <div className=" ">
            <form onSubmit={handlePurchase}>
              <div className=" grid md:grid-cols-2 gap-2 ">
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
                  <legend className="fieldset-legend">ServiceId</legend>
                  <input
                    name="service_id"
                    type="text"
                    className="input w-full"
                    defaultValue={_id}
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
                    name="providerName"
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
                    defaultValue={providrEmail}
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Current user Email
                  </legend>
                  <input
                    name="currenUserEmail"
                    type="text"
                    className="input w-full"
                    defaultValue={user.email}
                    readOnly
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Current User Name</legend>
                  <input
                    name="currentUserName"
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
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">ServiceStatus</legend>
                  <input
                    name="status"
                    type="text"
                    className="input w-full"
                    defaultValue="pending"
                    readOnly
                  />
                </fieldset>
              </div>

              <div className="flex justify-between mt-5 gap-5">
                <button type="submit" className=" btn btn-secondary px-5">
                  PURCHEASE
                </button>
                <button
                  type="button"
                  className="btn bg-red-700"
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServicesDetails;
