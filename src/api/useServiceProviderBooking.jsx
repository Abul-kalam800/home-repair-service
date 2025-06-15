import React from "react";
import useAxieoSecure from "../hook/useAxieoSecure";

const useServiceProviderBooking = () => {
  const axieosSecure = useAxieoSecure();
  const serviceProviderBookingPromise = (serviceProvider) => {
    return axieosSecure
      .get(`/myservicesbookings?providerEmail=${serviceProvider}`)
      .then((res) => res.data);
  };
  return {
    serviceProviderBookingPromise,
  };
};

export default useServiceProviderBooking;
