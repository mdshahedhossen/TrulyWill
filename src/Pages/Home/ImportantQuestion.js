import React from "react";

const ImportantQuestion = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-14  mt-28 mb-28">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box p-8 shadow-md ">
        <div class="collapse-title text-xl font-press-start">
         How do I secure my children's future through an estate plan?
        </div>
        <div class="collapse-content">
          <p>on process</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 p-8 shadow-md bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-press-start">
        My child is too young to inherit, what do I do?
        </div>
        <div class="collapse-content">
          <p>on process</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box p-8 shadow-md">
        <div class="collapse-title text-xl font-press-start">
        What if I have another child after signing a will
        </div>
        <div class="collapse-content">
          <p>On process</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box p-8 shadow-md">
        <div class="collapse-title text-xl font-press-start">
        My partner and I own many properties but are not married. How will that work?
        </div>
        <div class="collapse-content">
          <p>on process</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 p-8 shadow-md bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-press-start">
        What if the guardian I choose is no longer around or unable to provide at the time?
        </div>
        <div class="collapse-content">
          <p>On process</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 p-8 shadow-md rounded-box">
        <div class="collapse-title text-xl font-press-start">
        I've seen my family/friends go to court for a probate. Can I avoid this?
        </div>
        <div class="collapse-content">
          <p>On process</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantQuestion;
