 import React, { Suspense, use } from 'react';
import MyservicesList from '../componets/MyservicesList';
import { AuthContex } from '../Contex/AuthContex';
import { servicesCreatedbyPromies } from '../shared/servicePromies';
import useMyAllService from '../api/useMyallService';
import Loading from '../componets/Loading';

 
 const ManageService = () => {
    const {user}= use(AuthContex)
    const {servicesCreatedbyPromies}=useMyAllService()
   
    return (
        <div>
            <title>Manage-services</title>
          
            <Suspense fallback={<Loading></Loading>}>
                <MyservicesList servicesCreatedbyPromies={servicesCreatedbyPromies(user.email)}></MyservicesList>
            </Suspense>
        </div>
    );
 };
 
 export default ManageService;