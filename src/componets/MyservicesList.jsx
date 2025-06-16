import React, { use, useEffect, useState } from "react";
import MyserviceCard from "./MyserviceCard";

const MyservicesList = ({ servicesCreatedbyPromies }) => {
  const services = use(servicesCreatedbyPromies);
  const [servicesCard, setServicesCard] = useState(services);


  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl font-semibold my-10 text-center">
        My service List: {servicesCard.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesCard?.map((service) => (
          <MyserviceCard
            key={service?._id}
            service={service}
           setServicesCard={setServicesCard}
            servicesCard={servicesCard}
          ></MyserviceCard>
        ))}
      </div>
    </div>
  );
};

export default MyservicesList;
