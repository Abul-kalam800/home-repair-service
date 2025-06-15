import React from 'react';
 
import rahimsteel from '../assets/brand/rahim.jpg'
import bdclean from '../assets/brand/bdclean.png'
import masud from '../assets/brand/masudsteel.png'
import ksrm from '../assets/brand/KSRM-1.jpg'
import shah from '../assets/brand/shah.png'
import walton from '../assets/brand/wal.jpg'
import { color, motion } from "motion/react";

const OurPartner = () => {
    return (
        <motion.div
      initial={{ opacity: 0, translateX:"100%" }}
      transition={{ duration: 2 }}
      
      whileInView={{ opacity: 1, translateX: 0 }}
    
      className='mb-20'>
            <h3 className='text-5xl text-center my-20'>Our <motion.span
            animate={{
                color:['#0f1be8','#f8cd0b','#0bf8df'], 
                 transition:{duration:3, repeat:Infinity}
                }}
           
            >Busness</motion.span> Partner</h3>
            <div className='flex justify-center flex-col md:flex-row items-center md:gap-x-20 gap-y-10 '>
             <div className='h-30  object-fill'><img src={rahimsteel} alt=""  className='object-contain h-full'/>
             </div>
             <div  className='h-30 object-fill'> <img className='object-contain h-full' src={bdclean} alt="" /></div>  
             <div  className='h-30 object-fill '> <img className='object-contain h-full' src={masud} alt="" /></div>  
             <div  className='h-30 object-fill'> <img className='object-contain h-full' src={ksrm} alt="" /></div>  
             <div  className='h-30 object-fill'><img  className='object-contain h-full'src={shah} alt="" /></div>   
             <div className=' h-30 w-40 object-fill'> <img className='w-full h-full' src={walton} alt="" /></div>  
            </div>
      </motion.div>
    );
};

export default OurPartner;