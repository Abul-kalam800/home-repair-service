 import React, { Suspense, use } from 'react';
import MyservicesList from '../componets/MyservicesList';
import { AuthContex } from '../Contex/AuthContex';
import { servicesCreatedbyPromies } from '../shared/servicePromies';
 
 const ManageService = () => {
    const {user}= use(AuthContex)
    return (
        <div>
            <h1 className='text-6xl font-semibold text-center my-10'>Mange service</h1>
            <Suspense>
                <MyservicesList servicesCreatedbyPromies={servicesCreatedbyPromies(user.email)}></MyservicesList>
            </Suspense>
        </div>
    );
 };
 
 export default ManageService;