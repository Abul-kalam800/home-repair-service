import React from 'react';
import Banner from '../componets/Banner';
import { useLoaderData } from 'react-router';
import PopularService from '../componets/PopularService';

 
const servicesPromies = fetch('http://localhost:3000/popular_services')
.then(res=>res.json())
const Home = () => {
    
  
    return (
        <div>
            <title>Home-page</title>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
            <PopularService servicesPromies={servicesPromies}></PopularService>
            </div>

        </div>
    );
};

export default Home;