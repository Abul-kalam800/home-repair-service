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
 

  console.log(myservice);
  const handleStatus = (e,book_id)=>{
  
 console.log(e.target.value,book_id)
 axios.patch(`http://localhost:3000/myservicesbookings/${book_id}`,{status:e.target.value})
 .then(res=>{
    console.log(res.data)
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
    console.log(error)
 })
  }

  return (
    <div className="p-5 bg-base-200 rounded-2xl">
      <div>
        <img src={serviceImage} alt="" className="rounded-2xl" />
      </div>
      <div className=" grid space-y-2 bg-base-100 p-5">
        <h3 className="text-3xl font-semibold my-5">{serviceName}</h3>
        <p>{currenUserEmail}</p>
        <p>{currentUserName}</p>
       
          <select defaultValue={status} onChange={(e)=>{handleStatus(e, myservice._id)}}>
            <option value="pending">Pending</option>
            <option value="Working">Working</option>
            <option value="Complete">Complete</option>
          </select>
     
        <p>{date}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MyserviceBookinCard;
