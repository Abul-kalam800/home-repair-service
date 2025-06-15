  export const servicesCreatedbyPromies = (email,accessToken)=>{
    return fetch(`https://homerepairservices-server-i5pbxvonn-abul-kalam800s-projects.vercel.app/allservices?email=${email}`,{
      headers:{
        authorization:`Bearer ${accessToken}`
      }
      })
    .then(res=>res.json())
  }