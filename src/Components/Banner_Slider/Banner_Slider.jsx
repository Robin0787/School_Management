import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/Home/Banner/img-1.jpg";
import img2 from "../../assets/Home/Banner/img-2.jpg";
import img3 from "../../assets/Home/Banner/img-3.jpg";
import img4 from "../../assets/Home/Banner/img-4.jpg";
import img5 from "../../assets/Home/Banner/img-5.jpg";
import img6 from "../../assets/Home/Banner/img-6.jpg";


const Banner_Slider = () => {
    const [slidesOnView, setSlidesOnView] = useState(2);
    
    function changeSlidesOnView () {
        const width = window.innerWidth;

        if(width >= 1720) {
            setSlidesOnView(3);
        }
        else if(width >= 950 && width < 1720) {
            setSlidesOnView(2);
        }
        else if (width >= 768 && width < 950) {
            setSlidesOnView(1);
        }
        else if (width > 550 && width < 768) {
            setSlidesOnView(2);
        }
        else {
            setSlidesOnView(1);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', changeSlidesOnView);
        return () => window.removeEventListener('resize', changeSlidesOnView);
    })

    return (
        <Swiper
        slidesPerView={slidesOnView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='h-[240px] md:h-[360px] xl:h-[390px] 2xl:h-[420px] w-full rounded-lg overflow-hidden'
        >
            <SwiperSlide className="h-full relative group cursor-grabbing text-center">
                <img src={img1} alt="image-6" className='h-full object-cover rounded-lg mx-auto w-full' />
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-10 duration-500'></div>
            </SwiperSlide>
            <SwiperSlide className="h-full relative group cursor-grabbing">
                <img src={img2} alt="image-6" className='h-full object-cover rounded-lg mx-auto w-full' />
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-10 duration-500'></div>
            </SwiperSlide>
            <SwiperSlide className="h-full relative group cursor-grabbing">
                <img src={img3} alt="image-6" className='h-full object-cover rounded-lg mx-auto w-full' />
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-10 duration-500'></div>
            </SwiperSlide>
            <SwiperSlide className="h-full relative group cursor-grabbing">
                <img src={img4} alt="image-6" className='h-full object-cover rounded-lg mx-auto w-full' />
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-10 duration-500'></div>
            </SwiperSlide>
            <SwiperSlide className="h-full relative group cursor-grabbing">
                <img src={img5} alt="image-6" className='h-full object-cover rounded-lg mx-auto w-full' />
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-10 duration-500'></div>
            </SwiperSlide>
            <SwiperSlide className="h-full relative group cursor-grabbing">
                <img src={img6} alt="image-6" className='h-full object-cover rounded-lg mx-auto w-full' />
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-10 duration-500'></div>
            </SwiperSlide>
        </Swiper>
    )
};

export default Banner_Slider;