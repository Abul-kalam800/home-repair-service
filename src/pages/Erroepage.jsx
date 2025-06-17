import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import errphoto from '../assets/error.json'

const Erroepage = () => {
    return (
        <div className='h-screen flex justify-center flex-col items-center '>
            <Lottie animationData={errphoto} loop={true} style={{width:'400px', height:'300px'}}>  </Lottie>
            <h1 className='font-semibold text-7xl '>404 Error</h1>
            <p className='text-center mt-2 text-2xl'>Data not found</p>
            <Link to="/"><button className='p-3 btn btn-primary mt-10'>Go Back Home</button></Link>
        </div>
    );
};

export default Erroepage;