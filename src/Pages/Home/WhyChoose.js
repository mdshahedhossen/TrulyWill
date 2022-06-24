import React from 'react';
import men from '../../Images/people/man.png'
import women from '../../Images/people/women.png'
import women2 from '../../Images/people/women2.png'

const WhyChoose = () => {
    return (
        <section className='mb-5 bg-[#f4f9ff] py-7'>
            <div className='text-center mb-28'>
                <h2 className='text-[40px] font-bold font-press-start'>Why Choose TrulyWill?</h2>
                <p>See What Our Customers Have To Say</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12  lg:px-36 px-7 '>
                <div className='bg-white shadow-xl rounded-xl p-7 border-[1.5px] border-gray-300 '>
                <img className='w-20 -mt-16 mb-2' src={women} alt="" />
                    <div className=''>
                        <span className='text-18px font-sans'>“I felt every situation I was concerned abiut was covered in TrulyWill!”</span>
                        <div className='mt-8'>
                            <h3 className='text-[16px] text-[#363C41] font-mono p-1 font-bold'>Kelsey Storrer, 42</h3>
                            <span className='p-1 text-[14px] text-[#717478]'>Mother to a toddler</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-xl rounded-xl p-7 border-[1.5px] border-gray-300'>
                <img className='w-20 -mt-16 mb-2 ' src={men} alt="" />
                    <div>
                        <span className='text-18px font-sans'>“I felt every situation I was concerned abiut was covered in TrulyWill!”</span>
                        <div className='mt-8'>
                            <h3 className='text-[16px] text-[#363C41] font-mono p-1 font-bold'>Kelsey Storrer, 42</h3>
                            <span className='p-1 text-[14px] text-[#717478]'>Mother to a toddler</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-xl rounded-xl p-7 border-[1.5px] border-gray-300'>
                <img className='w-20 -mt-16 mb-2'src={women2} alt="" />
                    <div>
                        <span className='text-18px font-sans'>“I felt every situation I was concerned abiut was covered in TrulyWill!”</span>
                        <div className='mt-8'>
                            <h3 className='text-[16px] text-[#363C41] font-mono p-1 font-bold'>Kelsey Storrer, 42</h3>
                            <span className='p-1 text-[14px] text-[#717478]'>Mother to a toddler</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;