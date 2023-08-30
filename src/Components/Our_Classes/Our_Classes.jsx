import React, { useEffect, useState } from "react";
import { PiNumberEightBold, PiNumberNineBold, PiNumberOneBold, PiNumberSevenBold, PiNumberSixBold, PiNumberZeroBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';

const classes = [
    {
        class_Name: 'Six',
        subject: 7,
        link: '/subjects/class/6',
        color: 'green-500',
        background: '#22c55e',
        icon: PiNumberSixBold
    },
    {
        class_Name: 'Seven',
        subject: 8,
        link: '/subjects/class/7',
        color: 'blue-500',
        background: '#3b82f6',
        icon: PiNumberSevenBold
    },
    {
        class_Name: 'Eight',
        subject: 9,
        link: '/subjects/class/8',
        color: 'red-500',
        background: '#ef4444',
        icon: PiNumberEightBold
    },
    {
        class_Name: 'Nine',
        subject: 12,
        link: '/subjects/class/9',
        color: 'green-500',
        background: '#22c55e',
        icon: PiNumberNineBold
    },
    // {
    //     class_Name: 'Ten',
    //     subject: 12,
    //     link: '/subjects/10',
    //     color: 'blue-500',
    //     background: '#3b82f610',
    // },
]



const Our_Classes = () => {
    const [slidesOnView, setSlidesOnView] = useState(1);

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
                    slidesPerView={slidesOnView} modules={[Navigation]} className="px-12 h-[140px]">
                    {
                        classes.map((item) => {
                            const { class_Name, subject, link, color, background, icon } = item;
                            return (
                                <SwiperSlide className="h-full" key={class_Name}>
                                    <Link to={link} className={`flex justify-center items-center gap-4 border border-gray-300 px-6 py-3 rounded h-full 
                                    hover:bg-[${background}10] hover:border-[${background}] duration-300 `}>
                                        <div
                                            className={`bg-${color} text-white rounded-full p-3`}>
                                            {React.createElement(icon, { size: 30 })}
                                        </div>
                                        <div>
                                            <p className='text-lg font-semibold uppercase'>Class {class_Name}</p>
                                            <p className="text-sm">Subject : {subject}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
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