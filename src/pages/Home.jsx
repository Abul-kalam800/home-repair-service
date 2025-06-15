import React from 'react';
import Banner from '../componets/Banner';
import { useLoaderData } from 'react-router';
import PopularService from '../componets/PopularService';
import Upcoming from '../componets/Upcoming';
import OurPartner from '../componets/OurPartner';

 
const servicesPromies = fetch('https://homerepairservices-server-i5pbxvonn-abul-kalam800s-projects.vercel.app/popular_services')
.then(res=>res.json())
const Home = () => {
    
  
    return (
        <div>
            <title>Home-page</title>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
            <PopularService servicesPromies={servicesPromies}></PopularService>
            </div>
            <Upcoming></Upcoming>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;