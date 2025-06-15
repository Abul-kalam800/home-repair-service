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
            <h1  className='text-4xl my-10'>Service to do </h1>
              <Suspense fallback={<span>Loading.............</span>}>
                <MyserviceBookList serviceProviderBookingPromise={serviceProviderBookingPromise(user.email)}></MyserviceBookList>
            </Suspense>
       
        </div>
    );
};

export default ServiceToDo;