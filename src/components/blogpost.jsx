import React from 'react';
import blogimage1 from '../assets/blogImage1.png';
import blogimage2 from '../assets/blogImage2.png';
import blogimage3 from '../assets/blogImage3.png';
import blogimage4 from '../assets/blogImage4.png';
import blogimage5 from '../assets/blogImage5.png';
import { FaArrowRight } from "react-icons/fa";

const BlogPost = () => {
    return (
        <>
           <section className="bg-[#001F0A] font-Manrope justify-center items-center py-14 lg:px-16 px-24"> 
            <h1 className='font-Manrope text-white text-[2.5rem] font-bold ml-16 mb-6 text-center'>OUR BLOG POST</h1>
           

            <div className='flex gap-5 justify-center items-center mt-10'>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
                    <img className='w-[100%]' src={blogimage1} alt="Blog Image 1" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Top 5 fruits for Boosting Immunity</h1>
                    <p className='mt-3'>Stay healthy year-round by adding immunity-boosting fruits like orange and berries
                         to your diet. Learn which fruits can strengthen your immune system...</p>
                    <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                    <p className='text-[0.9rem]'>Mrs. Awanju Roseline</p>
                    <p className='text-neutral-400 text-[0.8rem]'>Oct 1, 2024</p>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                    <h1 className='font-bold'>Read More</h1>
                    <div><FaArrowRight size={20} /></div>
                    </div>
                    </div>
                   
                </div>


                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
                    <img className='w-[100%]' src={blogimage2} alt="Blog Image 2" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>How to Store Vegetables for Freshness</h1>
                    <p className='mt-3'>Extend the life of your fresh produce with these simple storage tips for common vegetables
                         like tomatoes, carrots, and leafy greens. Reduce waste and save money...
                                                                
                    </p>
                    <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                    <p className='text-[0.9rem]'>Ahmad Bello</p>
                    <p className='text-neutral-400 text-[0.8rem]'>Sept 29, 2024</p>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                    <h1 className='font-bold'>Read More</h1>
                    <div><FaArrowRight size={20} /></div>
                    </div>
                    </div>
                   
                </div>


                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
                    <img className='w-[100%]' src={blogimage3} alt="Blog Image 1" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Reducing Post-Harvest Losses</h1>
                    <p className='mt-3'>Learn how proper post-harvest practices can reduce losses for farmers. Discover
                         how Konectar helps minimize waste through better logistics and storage solutions...
                    </p>
                    <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                    <p className='text-[0.9rem]'>Bjorn Thomas</p>
                    <p className='text-neutral-400 text-[0.8rem]'>Sept 25, 2024</p>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                    <h1 className='font-bold'>Read More</h1>
                    <div><FaArrowRight size={20} /></div>
                    </div>
                    </div>
                   
                </div>
                
                
               
            </div>





            <div className='flex gap-5 justify-center items-center mt-5'>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
                    <img className='w-[100%]' src={blogimage4} alt="Blog Image 4" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Buying Local Produce</h1>
                    <p className='mt-3'>Understand the environmental and economic benefits of purchasing local produce. Support
                         your local farmers and reduce your carbon footprint by buying fresh and local...
                    </p>
                    <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                    <p className='text-[0.9rem]'>Chukwuma Chisom</p>
                    <p className='text-neutral-400 text-[0.8rem]'>Sept 05, 2024</p>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                    <h1 className='font-bold'>Read More</h1>
                    <div><FaArrowRight size={20} /></div>
                    </div>
                    </div>
                   
                </div>


                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
                    <img className='w-[100%]' src={blogimage5} alt="Blog Image 5" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>5 Healthy Breakfast Recipes to Try</h1>
                    <p className='mt-3'>Try quick and nutritious breakfast recipes featuring seasonal fruits. These easy-to-make
                         meals are perfect for busy mornings, providing you wiht energy and freshness...                                   
                    </p>
                    <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                    <p className='text-[0.9rem]'>Deborah Rita</p>
                    <p className='text-neutral-400 text-[0.8rem]'>Sept 02, 2024</p>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                    <h1 className='font-bold'>Read More</h1>
                    <div><FaArrowRight size={20} /></div>
                    </div>
                    </div>
                   
                </div>


                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
                    <img className='w-[100%]' src={blogimage5} alt="Blog Image 5" />
                    <h1 className='font-bold text-[1.2rem] mt-5'>Why Eating Seasonally is Beneficial</h1>
                    <p className='mt-3'>Discover how eating seasonal fruits and vegetables supports sustainability and benefits your health. 
                        Seasonal eating reduces carbon footprint and ensures fresh, nutrient...
                    </p>
                    <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                    <p className='text-[0.9rem]'>Charles Don</p>
                    <p className='text-neutral-400 text-[0.8rem]'>Aug 25, 2024</p>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                    <h1 className='font-bold'>Read More</h1>
                    <div><FaArrowRight size={20} /></div>
                    </div>
                    </div>
                   
                </div>
                
                
               
            </div>
            </section>    
        </>
    );
};

export default BlogPost;
