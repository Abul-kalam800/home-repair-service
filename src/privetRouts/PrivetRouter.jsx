import React, { use } from 'react';
import { AuthContex } from '../Contex/AuthContex';
import { Navigate, useLocation } from 'react-router';
import Loading from '../componets/Loading';

const PrivetRouter = ({childern}) => {
    const location = useLocation()
    const {user,loading}=use(AuthContex)
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return (
      <div>
         {childern}
      </div>
    );
};

export default PrivetRouter;