import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../componets/ServiceCard';


const Allservices = () => {
    // const allServices = useLoaderData()
    const [search, setSearch] = useState("");
    const [services,setServices]=useState([])
     useEffect(() => {
    fetch(`https://homerepairservices-server.vercel.app/services?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [search]);

    return (
        <div className='max-w-7xl mx-auto px-5 md:px-0'>
            <title>All-services</title>
            <h2 className="text-3xl md:text-5xl font-semibold text-center mt-10 text-green-400">Our  All Services Avaiable </h2>
            <p className="mt-8 text-md md:text-lg text-center md:w-8/12 mx-auto ">Here Our all service is avaiable,Scroll and read our service and choose your perfect and match service Whice you want, You cand also serach for quic find.</p>
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