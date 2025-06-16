import React, { use, useEffect, useState } from "react";
import MyserviceCard from "./MyserviceCard";

const MyservicesList = ({ servicesCreatedbyPromies }) => {
  const services = use(servicesCreatedbyPromies);
  const [servicesCard, setServicesCard] = useState(services);

  return (
    <div className="my-10">
      {
        servicesCard.length == 0 ?  <h2 className="text-2xl text-center md:text-3xl text-warning font-semibold my-10">You are Not creat any service, Kindly creat service then come back!</h2>:
      <>
        <h1 className="text-3xl md:text-5xl font-semibold text-center my-10">
        Mange service
      </h1>
       <p className="mt-8 text-lg text-center md:w-8/12 mx-auto">
        This section you can manage your service, What kind service you are
        provided. Yor cand update and deldet,and add new iteam,
      </p>
       <h1 className="text-2xl font-semibold my-10 text-center">
        My service List: {servicesCard.length}
      </h1>
      </>
      }
     
     
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
