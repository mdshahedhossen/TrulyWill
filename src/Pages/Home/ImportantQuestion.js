import React from "react";

const ImportantQuestion = () => {
  return (
    <div id="queston" className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-14  mt-28 mb-28 bg-[#f4f9ff] py-7">
      <div
         tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box p-8 shadow-md ">
        <div className="collapse-title text-xl font-press-start">
         How do I secure my children's future through an estate plan?
        </div>
        <div className="collapse-content">
          <p>on process</p>
        </div>
      </div>
      <div
         tabIndex="0"
        className="collapse collapse-arrow border border-base-300 p-8 shadow-md bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-press-start">
        My child is too young to inherit, what do I do?
        </div>
        <div className="collapse-content">
          <p>on process</p>
        </div>
      </div>
      <div
         tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box p-8 shadow-md">
        <div className="collapse-title text-xl font-press-start">
        What if I have another child after signing a will
        </div>
        <div className="collapse-content">
          <p>On process</p>
        </div>
      </div>
      <div
         tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box p-8 shadow-md">
        <div className="collapse-title text-xl font-press-start">
        My partner and I own many properties but are not married. How will that work?
        </div>
        <div className="collapse-content">
          <p>on process</p>
        </div>
      </div>
      <div
         tabIndex="0"
        className="collapse collapse-arrow border border-base-300 p-8 shadow-md bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-press-start">
        What if the guardian I choose is no longer around or unable to provide at the time?
        </div>
        <div className="collapse-content">
          <p>On process</p>
        </div>
      </div>
      <div
         tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 p-8 shadow-md rounded-box">
        <div className="collapse-title text-xl font-press-start">
        I've seen my family/friends go to court for a probate. Can I avoid this?
        </div>
        <div className="collapse-content">
          <p>On process</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantQuestion;
