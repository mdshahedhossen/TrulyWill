import React from "react";
import expert from '../../Images/works/expert.png'
import questions from '../../Images/works/question.png'
import sign from '../../Images/works/sign.png'

const Works = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center lg:px-32 px-4 my-14">
        <div className="divider"></div>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-[40px] font-press-start font-bold">How it Works</h2>
        <p>With TrulyWill you will get expert guidance at every point</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 px-28">
        <div className="flex flex-col justify-center lg:p-14 p-6">
            <div className="mx-auto">
            <img src={expert} alt="" />
            </div>
           <div className="text-center">
           <h3 className="text-[24px] font-press-start font-bold">Answer a guided set of simple questions</h3>
           </div>
        </div>
        <div className="flex flex-col justify-center lg:p-14 p-6">
            <div className="mx-auto">
            <img src={questions} alt="" />
            </div>
           <div className="text-center">
           <h3 className="text-[24px] font-press-start font-bold">Our experts will review the generated Will</h3>
           </div>
        </div>
        <div className="flex flex-col justify-center lg:p-14 p-6">
            <div className="mx-auto">
            <img src={sign} alt="" />
            </div>
           <div className="text-center">
           <h3 className="text-[24px] font-press-start font-bold">Sign & notarize to complete the process</h3>
           </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:px-32 px-4 my-14">
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default Works;
