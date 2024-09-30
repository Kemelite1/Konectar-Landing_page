import React from 'react';
import sdg2 from '../assets/sdgpic2.png';
import placeholder from '../assets/placeholder8.png';
import sdg9 from '../assets/sdgpic9.png';
import sdg12 from '../assets/sdgpic12.png';


const SdgMission = () => {
    return (
        <>
         <section className='bg-[#003333] py-20'>
            <h1 className='font-Manrope text-white text-[2rem] font-bold ml-16 mb-6'>KONECTAR's SDG MISSION</h1>
            <hr />

            <div className='flex gap-5 justify-center items-center mt-10'>
                <div>
                    <img className='h-[100%] w-[100%]' src={sdg2} alt="SDG2" />
                </div>
                <div>
                    <img className='h-[100%] w-[100%]' src={placeholder} alt="PLACEHOLDER" />
                </div>
                <div>
                    <img className='h-[100%] w-[100%]' src={sdg9} alt="SDG9" />
                </div>
                <div>
                    <img className='h-[100%] w-[100%]' src={sdg12} alt="SDG12" />
                </div>
            </div>
            </section>   
        </>
    );
};

export default SdgMission;