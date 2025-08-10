import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const MyserviceBookinCard = ({ myservice }) => {
  const {
    currenUserEmail,
    currentUserName,
    serviceImage,
    serviceName,
    price,
   date,
    status,
  } = myservice;
 

 
  const handleStatus = (e,book_id)=>{
  

 axios.patch(`https://homerepairservices-server.vercel.app/myservicesbookings/${book_id}`,{status:e.target.value})
 .then(res=>{
   
    if(res.data. modifiedCount){
          Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your are successfully update status",
                    showConfirmButton: false,
                    timer: 1500,
                  });

    }
 })
 .catch(error=>{
     Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Your are in error ${error}`,
              showConfirmButton: false,
              timer: 1500,
            });
 })
  }

  return (
    <div className="p-2 bg-base-200 rounded-2xl">
      <div>
        <img src={serviceImage} alt="" className="rounded-2xl" />
      </div>
      <div className=" grid space-y-2 bg-base-100 p-5">
        <h3 className="my-4 text-xl md:text-2xl font-semibold">{serviceName}</h3>
        <p>{currenUserEmail}</p>
        <p>{currentUserName}</p>
         <p>{date}</p>
        <p>{price}</p>
       
          <select defaultValue={status} className="select" onChange={(e)=>{handleStatus(e, myservice._id)}}>
            <option value="pending">Pending</option>
            <option value="Working">Working</option>
            <option value="Complete">Complete</option>
          </select>
     
       
      </div>
    </div>
  );
};

export default MyserviceBookinCard;
