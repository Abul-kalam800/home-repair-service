import React from 'react';
import { Link } from 'react-router';

const Erroepage = () => {
    return (
        <div className='h-screen flex justify-center flex-col items-center '>
            <h1 className='font-semibold text-7xl '>404 Error</h1>
            <p className='text-center mt-5 text-2xl'>Data not found</p>
            <Link to="/"><button className='p-3 btn btn-primary mt-10'>Go Back Home</button></Link>
        </div>
    );
};

export default Erroepage;