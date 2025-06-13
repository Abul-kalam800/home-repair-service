export const bookingPromiesBymail = (email)=>{
    return fetch(`http://localhost:3000/booking?email=${email}`)
    .then(res=> res.json())
}

export const serviceProviderBookingPromise = (serviceProvider)=>{
    return fetch(`http://localhost:3000/myservicesbookings?providerEmail=${serviceProvider}`)
    .then(res=>res.json())
}