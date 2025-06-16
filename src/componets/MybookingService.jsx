import React, { use } from 'react';
import BookingCard from './BookingCard';

const MybookingService = ({ bookingPromiesBymail}) => {
    const bookingService = use(bookingPromiesBymail)
    return (
        <div>
            {
                bookingService.length==0? <h3 className='text-2xl text-center text-warning lg:text-3xl my-10 max-h-screen '>Oops! You are Nat booking any service. Please go back and book</h3>:
                
            <h3 className='text-2xl text-center md:text-5xl font-semibold my-10'>My booking service List : {bookingService.length}</h3>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-12 justify-center'>
                {
                    bookingService.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default MybookingService;