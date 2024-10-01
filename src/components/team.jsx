import React from 'react';
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import person4 from "../assets/person4.png"
import person5 from "../assets/person5.png"


const Team = () => {
    return (
        <>
          <section className='text-center px-12 mt-10'>
            <h1 className='text-[2rem] font-bold'>Meet Our Beautiful Team</h1>
                    <div className='w-[60%] m-auto'><p className=''>We are a passionate and diverse group of professionals, driven by innovation and a shared commitment 
                    to delivering exceptional results.</p></div>    
        </section>  

        <section className='flex justify-center items-center gap-32 mt-48'>
            <div className='basis-[20%]'>
            <div className='bg-[#003311] rounded-[50%] h-[16.6rem] flex justify-center items-center'>
                <img className='w-[100%] h-[24.5rem] rounded-[50%] mb-[7.7rem]' src={person1} alt="Team Member 1" />
            </div>

            <div className='text-center'>
                <p className='font-bold'>Andrew Amos</p>
                <p className='text-[#003311] text-[0.8rem] mt-1'>Founder & CEO</p>
                <p className='text-[0.6rem] mt-2'>andrewamos202@gmail.com</p>
            </div>

            </div>
            <div className='basis-[20%]'>
            <div className='bg-[#003311] rounded-[50%] h-[16.6rem] flex justify-center items-center'>
                <img className='w-[100%] h-[30.8rem] rounded-[50%] mb-[14rem]' src={person2} alt="Team Member 1" />
            </div>

            <div className='text-center'>
                <p className='font-bold'>Hannah Lawal</p>
                <p className='text-[#003311] text-[0.8rem] mt-1'>Product Manager</p>
                <p className='text-[0.6rem] mt-2'>lawhann@gmail.com</p>
            </div>

            </div>
           

            <div className='basis-[20%]'>
            <div className='bg-[#003311] rounded-[50%] h-[16.6rem] flex justify-center items-center'>
                <img className='w-[100%] h-[24.5rem] rounded-[50%] mb-[7.7rem]' src={person3} alt="Team Member 1" />
            </div>

            <div className='text-center'>
                <p className='font-bold'>Rita Uchenna</p>
                <p className='text-[#003311] text-[0.8rem] mt-1'>Product Designer</p>
                <p className='text-[0.6rem] mt-2'>uchenrit89033@gmail.com</p>
            </div>

            </div>
           
           
        </section>

        <section className='flex justify-center items-center gap-32 mt-28'>
            <div className='basis-[20%]'>
            <div className='bg-[#003311] rounded-[50%] h-[16.6rem] flex justify-center items-center'>
                <img className='w-[100%] h-[24.5rem] rounded-[50%] mb-[7.7rem]' src={person4} alt="Team Member 1" />
            </div>

            <div className='text-center'>
                <p className='font-bold'>Linda Ikeji-Ada</p>
                <p className='text-[#003311] text-[0.8rem] mt-1'>Frontend Developer</p>
                <p className='text-[0.6rem] mt-2'>Ikalinda112233@gmail.com</p>
            </div>

            </div>
            <div className='basis-[20%]'>
            <div className='bg-[#003311] rounded-[50%] h-[16.6rem] flex justify-center items-center'>
                <img className='w-[100%] h-[23rem] rounded-[50%] mb-[6rem]' src={person5} alt="Team Member 1" />
            </div>

            <div className='text-center'>
                <p className='font-bold'>Adams Adewale</p>
                <p className='text-[#003311] text-[0.8rem] mt-1'>Backend Developer</p>
                <p className='text-[0.6rem] mt-2'>adewaleadamssa@gmail.com</p>
            </div>

            </div>
           

           
           
        </section>
        </>
    );
};

export default Team;
