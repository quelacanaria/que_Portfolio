import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const techIcons = [
  "html5", "css3", "javascript", "react", "nodejs", "express",
  "java", "springBoot", "php", "git", "github"
];

function Card({pic = ''}){
    return(
        <>
          <div className=" h-[400px] bg-green-xx p-[25px] mx-auto 2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[80%] xs:w-[100%] ">
      <p className="text-[1.1rem] mb-4">
        <i className="fa-solid fa-screwdriver-wrench"></i> My TechStack tools
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        grabCursor={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {techIcons.map((icon) => (
          <SwiperSlide key={icon} className="flex justify-center items-center w-[50px] h-[50px] cursor-move">
            <img src={`./src/Components/image/${icon}.svg`} alt={icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </>
    )
}

export default Card;