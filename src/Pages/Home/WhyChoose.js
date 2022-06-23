import React from 'react';
import men from '../../Images/people/man.png'
import women from '../../Images/people/women.png'
import women2 from '../../Images/people/women2.png'

const WhyChoose = () => {
    return (
        <section>
            <div className='text-center mb-28'>
                <h2 className='text-[40px] font-bold font-press-start'>Why Choose TrulyWill?</h2>
                <p>See What Our Customers Have To Say</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 px-36 '>
                <div className='bg-white shadow-xl rounded-lg p-7'>
                <img className='w-20 -mt-12 mb-28' src={women} alt="" />
                    <div className=''>
                        <span className='text-18px font-sans'>“I felt every situation I was concerned abiut was covered in TrulyWill!”</span>
                    </div>
                </div>
                <div className='bg-white shadow-xl rounded-lg p-7'>
                <img src={women} alt="" />
                    <div>
                        <span className='text-18px font-sans'>“I felt every situation I was concerned abiut was covered in TrulyWill!”</span>
                    </div>
                </div>
                <div className='bg-white shadow-xl rounded-lg p-7'>
                <img src={women} alt="" />
                    <div>
                        <span className='p-32 text-18px font-sans'>“I felt every situation I was concerned abiut was covered in TrulyWill!”</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;