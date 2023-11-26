// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const TLIStory = () => {
    const bannerBgImages = [
        "https://i.ibb.co/8DK1hpv/banner-bg1.jpg",
        "https://i.ibb.co/gDVY6Y9/banner-bg2.jpg",
        "https://i.ibb.co/Vmnbb42/banner-bg3.jpg",
        "https://i.ibb.co/cy3XZNx/banner-bg4.jpg",
        "https://i.ibb.co/k1hYWqb/banner-bg5.jpg"
    ];

    return (
        <div className='cursor-pointer  h-36  lg:mx-14 my-4'>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                {bannerBgImages.map((bannerBgImage, index) => (
                    <SwiperSlide key={index}>
                        <div className='group flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md mx-2'>
                            <img
                                className='object-cover
                                h-32 
                                w-32
                                rounded-t-md
                                group-hover:scale-110 
                                transition'
                                src={bannerBgImage}
                                alt={`Slide ${index + 1}`}
                            />
                            <button className='border-[1px] border-[#0E2740] w-full rounded-b-md mx-2'>Full Story</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TLIStory;
