import React from 'react';
import frame1 from "../assets/Frame1.png"
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';



const Offers = () => {
    return (
        <>
         <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.8),rgba(6,8,12,0.8)),url('assets/bgW.png')] bg-cover bg-center bg-no-repeat font-Manrope justify-center items-center py-14 lg:px-16 px-24"> 
            <h1 className='font-Manrope text-white text-[2.5rem] font-bold ml-16 mb-6'>What We Offer!</h1>
            <hr />

            <div className='flex gap-5 justify-center items-center mt-10'>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg'>
                    <img className='w-[100%]' src={frame1} alt="SDG2" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Konectar for Farmers</h1>
                    <p className='mt-3'>Farmers harvest fresh produce from their farms, ready for sale... <b className='cursor-pointer'>Read More</b></p>
                    <button className='bg-[#ADEBC2] px-3 py-2 text-white rounded-lg mt-3'>Coming Soon</button>
                   
                </div>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg'>
                    <img className='w-[100%]' src={frame2} alt="frame 2" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Konectar for Business Buyers</h1>
                    <p className='mt-3'>Farmers harvest fresh produce from their farms, ready for sale... <b className='cursor-pointer'>Read More</b></p>
                    <button className='bg-[#ADEBC2] px-3 py-2 text-white rounded-lg mt-3'>Coming Soon</button>
                   
                </div>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg'>
                    <img className='w-[100%]' src={frame3} alt="frame 3" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Konectar for 3PL Partners</h1>
                    <p className='mt-3'>Farmers harvest fresh produce from their farms, ready for sale... <b className='cursor-pointer'>Read More</b></p>
                    <button className='bg-[#ADEBC2] px-3 py-2 text-white rounded-lg mt-3'>Coming Soon</button>
                   
                </div>
               
            </div>
            </section>   
        </>
    );
};

export default Offers;