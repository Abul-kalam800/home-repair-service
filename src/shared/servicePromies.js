  export const servicesCreatedbyPromies = (email,accessToken)=>{
    return fetch(`https://homerepairservices-server.vercel.app/allservices?email=${email}`,{
      headers:{
        authorization:`Bearer ${accessToken}`
      }
      })
    .then(res=>res.json())
  }