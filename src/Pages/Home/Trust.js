import React from 'react';
import img from '../../Images/img.png'

const Trust = () => {
    return (
        <section className='flex lg:flex-row flex-col items-center p-10 bg-[#DDEAFF] lg:w-[1048px] mx-auto mb-12 mt-24'>
            <div>
                <img className='lg:-ml-40' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-[40px] font-serif font-bold'>Design your Trust-Based Estate Plan today</h2>
                <p className='text-[24px] text-[#4A4F53] mb-8'>Protect the future of your loved ones & start living without worry</p>
                <button className='btn bg-[#3484F0] border-none'>get started today</button>
            </div>
        </section>
    );
};

export default Trust;