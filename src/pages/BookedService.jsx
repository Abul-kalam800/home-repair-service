import React, { Suspense, use } from 'react';
import MybookingService from '../componets/MybookingService';
import { bookingPromiesBymail } from '../shared/bookingApiPromies';
import { AuthContex } from '../Contex/AuthContex';
import { Helmet } from 'react-helmet-async';

const BookedService = () => {
    const {user}=use(AuthContex)
    return (
        <div>
          <Helmet><title>Bookservices</title></Helmet>
            <Suspense fallback={<span>Loading............</span>}>
               <MybookingService
                bookingPromiesBymail={bookingPromiesBymail(user.email)}
               >
                </MybookingService> 
            </Suspense>
        </div>
    );
};

export default BookedService;