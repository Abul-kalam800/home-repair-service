import React, { use } from "react";
import { useParams } from "react-router";
import MyserviceBookinCard from "./MyserviceBookinCard";

const MyserviceBookList = ({ serviceProviderBookingPromise }) => {
  const  myservices = use(serviceProviderBookingPromise);
  console.log(myservices);

  return <>
     {

      myservices.length===0?<h3 className="text-4xl my-6">Your Service Not yet booking, Wait for booking </h3>
      :
      <h2 className="text-4xl font-semibold my-10">My Service Booking List: {myservices.length}</h2>
    }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          myservices.map(myservice=> <MyserviceBookinCard key={myservice._id} myservice={myservice}></MyserviceBookinCard>)
        }
      </div>
  </>;
};

export default MyserviceBookList;
