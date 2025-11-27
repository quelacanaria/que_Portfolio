import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";  
import 'swiper/css';    
import "swiper/css/navigation";

function Projects() {
const [ des, setDes ] = useState(null);
    const getDes = async() => {
        try{
            const response = await axios.get('./src/Components/proj-datas/Description.json');
            console.log('response -> ', response.data);
            setDes(response.data);
        }catch(error){
            console.log('error -> ', response.data)
        }
    }

    useEffect(() => {
        getDes();
    }, [])

    return(
        <>
          <div className="w-full h-[445px] bg-green-xx content-center ">
            <div className="w-[95%] h-full mx-auto shrink-0 z-[-1] ">
                <div className="w-full h-full bg-fink-99 mx-auto rounded-2xl p-[10px]">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        grabCursor={true}
                        loop={true}
                        navigation = {{
                            nextEl: '.button-prev',
                            prevEl: '.button-next',
                        }}
                        breakpoints = {{
                                1200: {slidesPerView: 3, spaceBetween: 50},
                                1150: {slidesPerView: 3, spaceBetween: 50},
                                1100: {slidesPerView: 3, spaceBetween: 50},
                                1000: {slidesPerView: 3, spaceBetween: 60},
                                900: { slidesPerView: 2, spaceBetween: -170},
                                800: { slidesPerView: 2, spaceBetween: -20},
                                700: { slidesPerView: 2, spaceBetween: 20},
                                600: { slidesPerView: 1, spaceBetween: 50},
                                500: { slidesPerView: 1, spaceBetween: 50},
                                400: { slidesPerView: 1, spaceBetween: 20},
                                300: { slidesPerView: 1, spaceBetween: 20},
                                200: { slidesPerView: 1, spaceBetween: 20},
                                0: { slidesPerView: 3, spaceBetween: 30},
                                }}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}>
                    {
                        des && Object.values(des.Projects).map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className='max-w-[300px] min-w-[300px] max-h-[400px] min-h-[400px] bg-white p-[15px] rounded-[10px] shadow-header justify-self-center hover:translate-y-[-10px] duration-300 mt-[10px] mb-[10px] relative flex flex-col'>
                                    <img className='border-1' src={`./src/Components/projects-images/${image.pic}.png`} alt="" />
                                    <p className='text-[1.1rem] text-center'>{image.pic}</p>
                                    <p className='text-[1rem]'>{image.description}</p>
                                    <div className='mt-auto flex gap-4 justify-evenly'>
                                        <button className='w-[120px] h-[50px] border-2 font-bold text-fink-99 border border-fink-99 rounded-[20px] bg-white shadow-mine hover:scale-110 active:scale-90 duration-300 '>View Project</button>
                                        <a href={`${image.link}`} target='_blank' className='w-[120px] h-[50px] border-2 content-center text-center font-bold text-white border border-transparent rounded-[20px] bg-fink-99 hover:scale-110 active:scale-90 duration-300 shadow-mine'>Goto Project</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
            </div>
          </div>
        </>
    )
}

export default Projects;