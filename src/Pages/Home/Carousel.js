import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="lg:w-2/4 mx-auto mb-9">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="px-20 ">
            <h1 className="text-[32px] font-bold font-press-start my-8">
              How do I secure my children's future through an estate plan?
            </h1>
            <span className="text-[16px] font-semibold py-2">
              An estate plan helps you choose your children's guardian.{" "}
            </span>
            <p>
              You can designate a person you trust, who will then take care of
              your dear one(s) in your absence. While choosing the guardian, you
              will have to consider their age, health, your relationship with
              them, and whether they can serve the best interests of your
              children. A solid estate plan puts you in control of how your
              assets get distributed and to whom. Without this, your children
              will be lost in an endless trail of paperwork and legalese.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20">
            <h1 className="text-[32px] font-bold font-press-start my-8">
              How do I secure my children's future through an estate plan?
            </h1>
            <span className="text-[16px] font-semibold py-2">
              An estate plan helps you choose your children's guardian.{" "}
            </span>
            <p>
              You can designate a person you trust, who will then take care of
              your dear one(s) in your absence. While choosing the guardian, you
              will have to consider their age, health, your relationship with
              them, and whether they can serve the best interests of your
              children. A solid estate plan puts you in control of how your
              assets get distributed and to whom. Without this, your children
              will be lost in an endless trail of paperwork and legalese.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20">
            <h1 className="text-[32px] font-bold font-press-start my-8">
              How do I secure my children's future through an estate plan?
            </h1>
            <span className="text-[16px] font-semibold py-2">
              An estate plan helps you choose your children's guardian.{" "}
            </span>
            <p>
              You can designate a person you trust, who will then take care of
              your dear one(s) in your absence. While choosing the guardian, you
              will have to consider their age, health, your relationship with
              them, and whether they can serve the best interests of your
              children. A solid estate plan puts you in control of how your
              assets get distributed and to whom. Without this, your children
              will be lost in an endless trail of paperwork and legalese.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center bg-[#3484F0] rounded-lg w-[294px] h-[54px] text-white font-bold hover:btn-success ml-20 my-12 justify-center">
        <button>
          Show me where to start
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-1 h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
