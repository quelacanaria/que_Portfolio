import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const techIcons = [
  "html5", "css3", "javascript", "react", "nodejs", "expressjs",
  "java", "springBoot", "php", "git", "github"
];

function Card(){
    return(
        <>
       
          <div className=" h-full max-w-[800px] bg-green-xx p-[25px] mx-auto 2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[80%] xs:w-[100%] ">
            <p className="mb-[20px] 2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]">
              <i className="fa-solid fa-screwdriver-wrench"></i> My TechStack tools
            </p>
            <div className="w-full flex justify-between ">
              <button className="button-prev border-2 h-[50px] w-[100px] rounded-[50px] self-center hover:scale-120 duration-300 active:scale-90 z-3 2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
                <i className="fa-solid fa-chevron-left text-[30px]"></i>
              </button>
              <Swiper
              modules={[Navigation, Autoplay]}
              grabCursor={true}
              loop={true}
              slidesPerView={5}
              spaceBetween={10}
              navigation = {{
                nextEl: '.button-prev',  
                prevEl: '.button-next',
              }}
              breakpoints = {{
                              1200:{slidesPerView: 5, spaceBetween: 10},
                              900: { slidesPerView: 5, spaceBetween: 10},
                              800: { slidesPerView: 5, spaceBetween: 10},
                              700: { slidesPerView: 5, spaceBetween: 10},
                              600: { slidesPerView: 5, spaceBetween: 10},
                              500: { slidesPerView: 5, spaceBetween: 10},
                              400: { slidesPerView: 5, spaceBetween: 2},
                              300: { slidesPerView: 5, spaceBetween: 2},
                              0: { slidesPerView: 5, spaceBetween: 8},
                            }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}>
              {techIcons.map((icon) => (
                <SwiperSlide key={icon}>
                  <img className="hover:scale-110 duration-300 active:scale-90 mt-[6px] mx-[6px]" src={`./src/Components/image/${icon}.svg`} alt={icon} />
                  <p className="2xl:text-[1.1rem] xl:text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem] sm:text-[1.1rem] xs:text-[.8rem]">{icon}</p>
                </SwiperSlide>
              ))}
            </Swiper>
              <button className="button-next border-2 h-[50px] w-[100px] rounded-[50px] self-center hover:scale-120 duration-300 active:scale-90 z-1 2xl:block xl:block lg:block md:block sm:hidden xs:hidden ">
                <i className="fa-solid fa-chevron-right text-[30px] "></i>
              </button>
            </div>
          </div>
        
        </>
    )
}

export default Card;