import React, { use } from "react";
import { useParams } from "react-router";
import MyserviceBookinCard from "./MyserviceBookinCard";

const MyserviceBookList = ({ serviceProviderBookingPromise }) => {
  const  myservices = use(serviceProviderBookingPromise);


  return <>
     {

      myservices.length===0? <h3 className="text-2xl text-warning lg:text-3xl my-20 text-center">Your Service Not yet booking, Wait for booking </h3>
      :
      <>
         <h1 className="text-3xl md:text-5xl font-semibold text-center mt-10 text-green-400">Service to do </h1>
            <p  className="mt-8 text-md md:text-lg text-center md:w-8/12 mx-auto px-2 md:px-0 ">Here yor can update you staus option ,Where will be default pending, then you cand working,and complete opti </p>
      <h2 className="text-2xl  text-center md:text-4xl font-semibold my-10">My Service Booking List: {myservices.length}</h2>
      </>

    }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          myservices.map(myservice=> <MyserviceBookinCard key={myservice._id} myservice={myservice}></MyserviceBookinCard>)
        }
      </div>
  </>;
};

export default MyserviceBookList;
