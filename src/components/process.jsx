import React from 'react';
import grouppic from '../assets/Grouppic.png'

const Process = () => {
    return (
        <>
         <div className='mt-20'>
            <h1 className='text-[#003333] font-Manrope font-bold text-center'>Our Process: The Golden Path</h1>    
        </div>   

        <div className='m-auto px-20 w-[80%]'>
            <img src={grouppic} alt="Our Process: The Golden Path" />
        </div>
        </>
    );
};

export default Process;
