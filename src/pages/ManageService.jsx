 import React, { Suspense, use } from 'react';
import MyservicesList from '../componets/MyservicesList';
import { AuthContex } from '../Contex/AuthContex';
import { servicesCreatedbyPromies } from '../shared/servicePromies';
import { Helmet } from 'react-helmet-async';
 
 const ManageService = () => {
    const {user}= use(AuthContex)
    return (
        <div>
            <Helmet><title>Manage-services</title></Helmet>
            <h1 className='text-6xl font-semibold text-center my-10'>Mange service</h1>
            <Suspense fallback={<span>Loading.............</span>}>
                <MyservicesList servicesCreatedbyPromies={servicesCreatedbyPromies(user.email)}></MyservicesList>
            </Suspense>
        </div>
    );
 };
 
 export default ManageService;