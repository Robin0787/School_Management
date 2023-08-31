import React, { useEffect, useState } from "react";
import { PiNumberEightBold, PiNumberNineBold, PiNumberOneBold, PiNumberSevenBold, PiNumberSixBold, PiNumberZeroBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';


const Our_Classes = () => {
    const [slidesOnView, setSlidesOnView] = useState(3);

    function changeSlidesPerView() {
        const width = window.innerWidth;
        if (width > 1400) {
            setSlidesOnView(4)
        }
        else if (width > 970) {
            setSlidesOnView(3)
        }
        else if (width > 700) {
            setSlidesOnView(2);
        }
        else {
            setSlidesOnView(1);
        }
    }

    useEffect(() => {
        changeSlidesPerView();
        window.addEventListener('resize', changeSlidesPerView);
        return () => window.removeEventListener('resize', changeSlidesPerView);
    }, []);

    return (
        <Container >
            <section>
                <Swiper navigation={true} autoplay={true} spaceBetween={50}
                    slidesPerView={slidesOnView} modules={[Navigation]} className="px-12 h-[100px] md:h-[140px]">
                    <SwiperSlide className="h-full">
                        <Link to={'/subjects/class/6'} className={`flex justify-center items-center gap-4 border border-gray-300 px-6 py-3 rounded h-full 
                                    hover:bg-[#22c55e10] hover:border-[#22c55e] duration-300 `}>
                            <div
                                className={`bg-green-500 text-white rounded-full p-3`}>
                                {React.createElement(PiNumberSixBold, { size: 30 })}
                            </div>
                            <div>
                                <p className='text-lg font-semibold uppercase whitespace-nowrap'>Class 6</p>
                                <p className="text-sm whitespace-nowrap">Subject : 7</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <Link to={'/subjects/class/7'} className={`flex justify-center items-center gap-4 border border-gray-300 px-6 py-3 rounded h-full 
                                    hover:bg-[#ef444410] hover:border-[#ef4444] duration-300 `}>
                            <div
                                className={`bg-red-500 text-white rounded-full p-3`}>
                                {React.createElement(PiNumberSevenBold, { size: 30 })}
                            </div>
                            <div>
                                <p className='text-lg font-semibold uppercase whitespace-nowrap'>Class Seven</p>
                                <p className="text-sm whitespace-nowrap">Subject : 8</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <Link to={'/subjects/class/8'} className={`flex justify-center items-center gap-4 border border-gray-300 px-6 py-3 rounded h-full 
                                    hover:bg-[#3b82f610] hover:border-[#3b82f6] duration-300 `}>
                            <div
                                className={`bg-blue-500 text-white rounded-full p-3`}>
                                {React.createElement(PiNumberEightBold, { size: 30 })}
                            </div>
                            <div>
                                <p className='text-lg font-semibold uppercase whitespace-nowrap'>Class Eight</p>
                                <p className="text-sm whitespace-nowrap">Subject : 10</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <Link to={'/subjects/class/9'} className={`flex justify-center items-center gap-4 border border-gray-300 px-6 py-3 rounded h-full 
                                    hover:bg-[#a855f710] hover:border-[#a855f7] duration-300 `}>
                            <div
                                className={`bg-purple-500 text-white rounded-full p-3`}>
                                {React.createElement(PiNumberNineBold, { size: 30 })}
                            </div>
                            <div>
                                <p className='text-lg font-semibold uppercase whitespace-nowrap'>Class Nine</p>
                                <p className="text-sm whitespace-nowrap">Subject : 13</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <Link to={'/subjects/class/10'} className={`flex justify-center items-center gap-4 border border-gray-300 px-6 py-3 rounded h-full 
                                    hover:bg-[#eab30810] hover:border-yellow-500 duration-300 `}>
                            <div
                                className={`bg-yellow-500 text-white rounded-full py-3 px-1`}>
                                <div className="flex justify-center items-center relative -space-x-3">
                                    <PiNumberOneBold size={30} />
                                    <PiNumberZeroBold size={30} className="" />
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-semibold uppercase'>Class Ten</p>
                                <p className="text-sm">Subject : 12</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </section>
        </Container>
    );
};

export default Our_Classes;