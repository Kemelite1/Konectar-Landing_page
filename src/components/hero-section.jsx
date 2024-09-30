import React from 'react';



const HeroSection = () => {
    return (
        <>
        
            <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.6),rgba(6,8,15,0.2)),url('assets/hero-image1.png')] h-screen bg-cover bg-center bg-no-repeat text-[white] text-left justify-left items-center flex lg:px-0 px-24"> 
            
            <div className='w-[54%] ml-20'>
                      <h1 className='font-Manrope font-semibold text-[1.8rem] md:text-[2.8rem]'>Connecting Farms to Businesses: Nigeria's Leading Marketplace for Fresh Fruits and Vegetables</h1>
            
            <div className='flex flex-col md:flex-row gap-4 m-3 font-Manrope'>
        <button type="button"
       className='bg-[#009933] px-7 rounded-lg py-2 text-white text-[0.8rem] md:text-[1rem]'>Join the Waitlist</button>
        <button type='button'
       
        className='bg-transparent border-[#009933] border px-6 rounded-lg py-2 text-[white] text-[0.8rem] md:text-[1rem]'>Learn More</button>
    
            </div>
            </div>
        </section> 

        <div>
            <div className='border-x-2 border-solid border-s-violet-100 border-y-4 border-[white]'></div>
        </div>
        </>
    );
};

export default HeroSection;
