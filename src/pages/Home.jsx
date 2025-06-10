import React from 'react';
import Banner from '../componets/Banner';
import { useLoaderData } from 'react-router';
import PopularService from '../componets/PopularService';
 
const servicesPromies = fetch('http://localhost:3000/popular_services')
.then(res=>res.json())
const Home = () => {
    
  
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
            <PopularService servicesPromies={servicesPromies}></PopularService>
            </div>

        </div>
    );
};

export default Home;