import Card from "./Card"
import React, { useEffect } from "react";
function Home(){

// useEffect(() => {
//     const swiperCards = new Swiper(".slider-wrapper", {
//       loop: true,
//       spaceBetween: 10,
//       slidesPerView: 20,
//       grabCursor: true,

//       pagination: {
//         el: "swiper-pagination",
//         clickable: true,
//       },

//       navigation: {
//         prevEl: ".swiper-button-prev",
//         nextEl: ".swiper-button-next",
//       },

//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },

//       breakpoints: {
//         1200: { slidesPerView: 5, spaceBetween: 10 },
//         900: { slidesPerView: 5, spaceBetween: 10 },
//         800: { slidesPerView: 5, spaceBetween: 10 },
//         700: { slidesPerView: 5, spaceBetween: 10 },
//         600: { slidesPerView: 5, spaceBetween: 10 },
//         500: { slidesPerView: 5, spaceBetween: 10 },
//         400: { slidesPerView: 5, spaceBetween: 10 },
//         0: { slidesPerView: 5, spaceBetween: 8 },
//       },
//     });

//   }, []);
    return(
        <>
          <main className="md:flex w-full h-[368px] bg-green-xx justify-center items-center 2xl:h-[368px] xl:h-[368px] lg:h-[368px] md:h-[368px] sm:h-[500px] xs:h-[540px]"> 
            <section className="bg-green-xx w-[40%] justify-end flex items-center lg:p-0 lg:w-[40%] lg:justify-end md:p-0 md:w-[40%] md:justify-end sm:pt-[30px] sm:w-full sm:justify-center xs:p-[30px] xs:w-full xs:justify-center">
                <div className="w-[250px] h-[250px] bg-green-xx rounded-[150px] overflow-hidden shadow-xx">
                    <img className="w-[90%] justify-self-center mt-[10px]"  src="./src/Components/image/profile.png" alt="" />
                </div>
            </section>
            <section className="w-[60%]  2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-full xs:w-full">
                <div className="mx-[20px]">
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-user"></i> QUEKENETH S. LACANARIA</p>
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-laptop-code"></i> Software Engineer</p>
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-user-graduate"></i> Computer Engineering graduate at Bestlink of the Philippines College</p>
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-graduation-cap"></i> School Year 2021-2025</p>
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-cake-candles"></i> March 28, 2002</p>
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-envelope"></i> lacanariaquekeneth46@gmail.com </p>
                    <p className="text-[1.1rem]"> <i className="fa-solid fa-location-dot"></i> North Fairview Quezon City</p>
                </div>
            </section>
          </main>
          
          {/* <div className="w-full h-[400px] bg-green-xx overflow-hidden p-[25px]">
            <div className="swiper relative m-auto overflow-visible">
                <p className="text-[1.1rem]"><i className="fa-solid fa-screwdriver-wrench"></i> My TechStack tools</p><br></br>
                <div className="slider-wrapper overflow-hidden relative m-auto p-[10px]">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src='./src/Components/image/html5.svg' alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/css3.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/javascript.svg" alt="" />
                     </div>
                    <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/react.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/nodejs.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/express.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/java.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/springBoot.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/php.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/git.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/github.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src='./src/Components/image/html5.svg' alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/css3.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/javascript.svg" alt="" />
                     </div>
                    <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/react.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/nodejs.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/express.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/java.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/springBoot.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/php.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/git.svg" alt="" />
                     </div>
                     <div className="swiper-slide w-[50px] h-[50px]" >
                        <img src="./src/Components/image/github.svg" alt="" />
                     </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>  
                <div className="swiper-button-next"></div>
            </div>
          </div> */}
            <Card/>
        </>
    )
}

export default Home