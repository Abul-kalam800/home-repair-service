import React, { Suspense, useContext } from 'react';
import { AuthContex } from '../Contex/AuthContex';

import MyserviceBookList from '../componets/MyserviceBookList';
import {serviceProviderBookingPromise } from '../shared/bookingApiPromies';
import useAxieoSecure from '../hook/useAxieoSecure';
import useServiceProviderBooking from '../api/useServiceProviderBooking';
import Loading from '../componets/Loading';



const ServiceToDo = () => {
    const {user}=useContext(AuthContex)
    const {serviceProviderBookingPromise}=useServiceProviderBooking()

 return(
        <div>
         
              <Suspense fallback={<Loading></Loading>}>
                <MyserviceBookList serviceProviderBookingPromise={serviceProviderBookingPromise(user.email)}></MyserviceBookList>
            </Suspense>
       
        </div>
    );
};

export default ServiceToDo;