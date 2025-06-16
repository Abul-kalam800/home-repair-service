import React, { Suspense, useContext } from 'react';
import { AuthContex } from '../Contex/AuthContex';

import MyserviceBookList from '../componets/MyserviceBookList';
import {serviceProviderBookingPromise } from '../shared/bookingApiPromies';
import useAxieoSecure from '../hook/useAxieoSecure';
import useServiceProviderBooking from '../api/useServiceProviderBooking';



const ServiceToDo = () => {
    const {user}=useContext(AuthContex)
    const {serviceProviderBookingPromise}=useServiceProviderBooking()

 return(
        <div>
            <h1  className='text-3xl md:text-5xl font-semibold text-center my-10'>Service to do </h1>
            <p  className="mt-8 text-lg text-center md:w-8/12 mx-auto">Here yor can update you staus option ,Where will be default pending, then you cand working,and complete opti </p>
              <Suspense fallback={<span>Loading.............</span>}>
                <MyserviceBookList serviceProviderBookingPromise={serviceProviderBookingPromise(user.email)}></MyserviceBookList>
            </Suspense>
       
        </div>
    );
};

export default ServiceToDo;