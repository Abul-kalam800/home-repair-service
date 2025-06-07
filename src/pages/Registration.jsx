import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";

const Registration = () => {
    const {creatUser} = useContext(AuthContex)
    const handleRegistration = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name,email,password,photo)
        // creat user 
        creatUser(email,password)
        .then(result =>{
            console.log(result.user)
            
        })
        .catch(error=>{
            console.log(error)
        })
        
        
    }
  return (
    <div className="bg-base-200 min-h-screen mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center">Registration Now!</h1>
        <div className="card-body space-y-4">
          <form onSubmit={handleRegistration} className="form space-y-3">
            <label className="label">Name</label>
            <input type="text" className="input" name="name" placeholde="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" name="photo" placeholder="Photo URL" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 w-full" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
