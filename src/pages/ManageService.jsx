 import React, { Suspense, use } from 'react';
import MyservicesList from '../componets/MyservicesList';
import { AuthContex } from '../Contex/AuthContex';
import { servicesCreatedbyPromies } from '../shared/servicePromies';
import useMyAllService from '../api/useMyallService';

 
 const ManageService = () => {
    const {user}= use(AuthContex)
    const {servicesCreatedbyPromies}=useMyAllService()
   
    return (
        <div>
            <title>Manage-services</title>
            <h1 className='text-6xl font-semibold text-center my-10'>Mange service</h1>
            <Suspense fallback={<span>Loading.............</span>}>
                <MyservicesList servicesCreatedbyPromies={servicesCreatedbyPromies(user.email)}></MyservicesList>
            </Suspense>
        </div>
    );
 };
 
 export default ManageService;