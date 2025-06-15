import React from 'react';
import useAxieoSecure from '../hook/useAxieoSecure';

const useMyAllService = () => {
    const axieosSecure = useAxieoSecure()
    const servicesCreatedbyPromies = email=>{
        return axieosSecure.get(`/allservices?email=${email}`)
        .then(res=>res.data)
    }
    return {
        servicesCreatedbyPromies
    }
     
    
};

export default useMyAllService;