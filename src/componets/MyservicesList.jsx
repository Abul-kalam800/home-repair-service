import React, { use } from "react";
import MyserviceCard from "./MyserviceCard";

const MyservicesList = ({ servicesCreatedbyPromies }) => {
  const services = use(servicesCreatedbyPromies);
  console.log(services);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-semibold my-10">My service List: {services.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(service=> <MyserviceCard key={service._id} service={service}></MyserviceCard> )
            }
        </div>
    </div>
  );
};

export default MyservicesList;
