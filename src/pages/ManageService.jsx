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
            <h1 className='text-3xl md:text-5xl font-semibold text-center my-10'>Mange service</h1>
            <p  className="mt-8 text-lg text-center md:w-8/12 mx-auto">This section you can manage your service, What kind service you are provided. Yor cand update and deldet,and add new iteam,</p>
            <Suspense fallback={<span>Loading.............</span>}>
                <MyservicesList servicesCreatedbyPromies={servicesCreatedbyPromies(user.email)}></MyservicesList>
            </Suspense>
        </div>
    );
 };
 
 export default ManageService;