import React from "react";
import plan from '../../Images/icons/plan.png'
import process from '../../Images/icons/hart.png'
import doller from '../../Images/icons/doller.png'
import receive from '../../Images/icons/receive.png'

const TruelySoluation = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center lg:px-32 px-4 my-14">
        <div className="divider"></div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-36 px-5">
        <div className="p-5">
         <h1 className="font-bold text-[32px] font-press-start">TrulyWill: <span className="text-[#3484F0]">The Solution</span> to all Your Estate Planning Concerns</h1>
        </div>
        <div className="">
          <div className="card max-w-screen-lg bg-base-100">
            <div className="card-body">
              <img src={receive} alt="" className="w-[22px]" />
              <div>
              <h1 className="text-xl font-press-start font-bold py-2">Receive Expert Guidance</h1>
              <p>Our support team is available on standby to give you expert guidance in making your legally valid estate plan</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="">
          <div className="card max-w-screen-lg bg-base-100">
            <div className="card-body">
              <img src={process} alt="" className="w-[22px]"/>
             <div>
                <h1 className="text-xl font-press-start font-bold py-2">Simplified process</h1>
                <p>You don't have to go before a court, you only have to answer a few questions stating your distribution choices and we will take care of the rest</p>
             </div>
              
            </div>
          </div>
        </div>
        <div className="lg:col-start-2">
          <div className="card max-w-screen-lg bg-base-100">
            <div className="card-body">
            <img src={doller} alt="" className="w-[22px]"/>
             <div>
                <h2 className="text-xl font-press-start font-bold py-2">Cost Effective</h2>
                <p>TrulyWill charges a small fee, without any hidden costs. You or your beneficiaries won't have to consult a lawyer to distribute your assets</p>
             </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card max-w-screen-lg bg-base-100 ">
            <div className="card-body">
            <img src={plan} alt="" className="w-[22px]"/>
              <div>
                <h2 className="text-xl font-press-start font-bold py-2 ">State-Specific Plan</h2>
                <p>We will tailor your Estate Plane to suit the laws of your State and ensure that it is legally sound</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruelySoluation;
