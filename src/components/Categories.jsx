import React, { useRef, useState } from 'react';
import food from "../assets/food.png"
import animal from "../assets/animal.jpeg"
import car from "../assets/car.jpeg"
import sport from "../assets/sport.jpeg"
import music from "../assets/music.jpeg"
import technology from "../assets/technology.jpeg"
import abstract from "../assets/abstract.jpeg"
import holiday from "../assets/holiday.jpeg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './categories.css';
// import required modules
import { Pagination } from 'swiper/modules';

const categories = () => {
    return (
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 8,
                    spaceBetween: 0,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper my-7"
              >
                <SwiperSlide>
                    <img src={food} className='w-40 h-10 rounded'/>
                    <div className="absolute inset-2 text-white text-center font-bold">#Food</div>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={animal} className='w-40 h-10 rounded'/>
                    <div className="absolute inset-2 text-white text-center font-bold">#Animal</div>
                    </SwiperSlide>
                <SwiperSlide><img src={car} className='w-40 h-10 rounded'/>
                <div className="absolute inset-2 text-white text-center font-bold">#Car</div>
                </SwiperSlide>
                <SwiperSlide><img src={sport} className='w-40 h-10 rounded'/>
                <div className="absolute inset-2 text-white text-center font-bold">#Sport</div>
                </SwiperSlide>
                <SwiperSlide><img src={music}className='w-40 h-10 rounded'/>                   
                 <div className="absolute inset-2 text-white text-center font-bold">#Music</div>
                 </SwiperSlide>
                <SwiperSlide><img src={sport} className='w-40 h-10 rounded'/>
                <div className="absolute inset-2 text-white text- font-bold ">#Sport</div>
                </SwiperSlide>
                <SwiperSlide><img src={technology} className='w-40 h-10 rounded'/>
                <div className="absolute inset-2 text-white text-center font-bold ">#Technology</div>
                </SwiperSlide>
                <SwiperSlide><img src={abstract} className='w-40 h-10 rounded'/>
                <div className="absolute inset-2 text-white text-center font-bold">#Abstract</div>
                </SwiperSlide>
                <SwiperSlide><img src={holiday} className='w-40 h-10 rounded'/>                   
                 <div className="absolute inset-2 text-white text-center font-bold">#Holiday</div>
                 </SwiperSlide>
                 </Swiper>
            </>
          );        
}

export default categories