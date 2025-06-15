import React from 'react';
import useAxieoSecure from '../hook/useAxieoSecure';

const useBookinPromiesApi = () => {
    const axieosSecure = useAxieoSecure()
    const bookingPromiesBymail = email=>{
     return  axieosSecure.get(`/booking?email=${email}`)
        .then(res=>res.data)
    }
    return  {
       bookingPromiesBymail
      } 
    
};

export default useBookinPromiesApi;