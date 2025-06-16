export const bookingPromiesBymail = (email,accessToken)=>{
    return fetch(`https://homerepairservices-server.vercel.app/booking?email=${email}`,{
        headers:{
            authorization:`Bearer ${accessToken}`
        }
    })
    .then(res=> res.json())
}

export const serviceProviderBookingPromise = (serviceProvider)=>{
    return fetch(`https://homerepairservices-server.vercel.app/myservicesbookings?providerEmail=${serviceProvider}`)
    .then(res=>res.json())
}