 import React, { use } from 'react';
import PopularServicesCard from './PopularServicesCard';


 
 const PopularService = ({servicesPromies}) => {
  const services = use(servicesPromies)
  
 
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center mt-20'>Popular service</h2>
            <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-5
            '>
              {
                services.map(service=> <PopularServicesCard key={service._id} service={service}></PopularServicesCard>)
              }
            </div>
        </div>
    );
 };
 
 export default PopularService;