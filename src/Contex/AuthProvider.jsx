import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  //creatuser 
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //log out 
  const logOut = ()=>{
    return signOut(auth)
  }
  // signin with google
  const googleSign = (provider)=>{
    return signInWithPopup(auth,provider)

  }
  //update profile
  const uptoProfile = (provider)=>{
    return updateProfile(auth.currentUser,provider)

  }
  const userInfo = {
    creatUser,
    singIn,
    user,
    setUser,
    logOut,
    googleSign,
    uptoProfile,
  };
  useEffect(() => {
    const subcrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      subcrib();
    };
  }, []);
  console.log(user);

  return <AuthContex value={userInfo}>{children}</AuthContex>;
};

export default AuthProvider;
