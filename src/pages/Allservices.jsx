import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../componets/ServiceCard';

const Allservices = () => {
    const allServices = useLoaderData()
    console.log(allServices)
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-5xl font-semibold text-center my-20'>Our  All Services Avaiable </h2>
           <div className=''>
             {
                allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
           </div>

        </div>
    );
};

export default Allservices;