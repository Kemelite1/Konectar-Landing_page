import React from 'react';

const BlogPost = () => {
    return (
        <>
           <section className="bg-[#001F0A] font-Manrope justify-center items-center py-14 lg:px-16 px-24"> 
            <h1 className='font-Manrope text-white text-[2.5rem] font-bold ml-16 mb-6'>OUR BLOG POST</h1>
           

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

export default BlogPost;
