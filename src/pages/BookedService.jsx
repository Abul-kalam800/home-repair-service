import React, { Suspense, use } from 'react';
import MybookingService from '../componets/MybookingService';
import { bookingPromiesBymail } from '../shared/bookingApiPromies';
import { AuthContex } from '../Contex/AuthContex';


const BookedService = () => {
    const {user}=use(AuthContex)
    return (
        <div>
          <title>Bookservices</title>
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