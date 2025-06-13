import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../componets/ServiceCard';


const Allservices = () => {
    // const allServices = useLoaderData()
    const [search, setSearch] = useState("");
    const [services,setServices]=useState([])
     useEffect(() => {
    fetch(`http://localhost:3000/services?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [search]);
  console.log(services)
   console.log(search)
    return (
        <div className='max-w-7xl mx-auto'>
            <title>All-services</title>
            <h2 className='text-2xl md:text-5xl font-semibold md:text-center md:my-10 mt-10 text-center'>Our  All Services Avaiable </h2>
           <div className='grid gap-y-7'>
            <input type="text" name="search" id=""  placeholder='Search by name' className='input w-full my-10 p-6 rounded-4xl border-3 '  onChange={(e) => setSearch(e.target.value)}/>
             {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
           </div>

        </div>
    );
};

export default Allservices;