import React from 'react';
import banner from '../../Images/banner.png'

const Banner = () => {
    return (
      <section>
        <div class="hero mx-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt='' className=" max-w-sm rounded-lg shadow-2xl w-[338px] h-[380px]"/>
        <div className=' max-w-lg px-2'>
          <h1 class="text-[56px] font-bold font-press-start"><span className='text-[#3484F0]'>Be There</span> Even When You Aren't</h1>
          <p class="py-4">Not being around for your kids isn't the best thought. But there is nothing wrong in preparing to take care of them in your absence... Because only you know the best.</p>
          <div className=''>
          <button class="bg-[#3484F0] rounded-lg w-[191px] h-[54px] text-white font-bold hover:btn-success mr-4 my-4">start our trust</button>
          <button class="bg-[#3484F0] rounded-lg w-[191px] h-[54px] text-white font-bold hover:btn-success">start our will</button>
          </div>
        </div>
      </div>
      
    </div>
    <div class="flex flex-col justify-center items-center lg:px-32 px-4 my-14">
  <div class="divider"></div> 
</div>
      </section>
    );
};

export default Banner;