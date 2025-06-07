import React  from "react";
import { AuthContex } from "./AuthContex";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

const AuthProvider = ({ children }) => {
    const creatUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userInfo ={
       creatUser, 
    }

 return <AuthContex value={userInfo}>{children}</AuthContex>;
 
};

export default AuthProvider;
