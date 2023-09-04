import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/Home/Banner/img-1.jpg";
import img2 from "../../assets/Home/Banner/img-2.jpg";
import img3 from "../../assets/Home/Banner/img-3.jpg";
import img4 from "../../assets/Home/Banner/img-4.jpg";
import img5 from "../../assets/Home/Banner/img-5.jpg";
import img6 from "../../assets/Home/Banner/img-6.jpg";


const Banner_Slider = () => {

    return (
        <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[EffectCreative]}
            className="h-full w-full cursor-grab"
        >
            <SwiperSlide>
                <img src={img1} alt="image-6" className='h-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="image-6" className='h-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="image-6" className='h-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="image-6" className='h-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="image-6" className='h-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} alt="image-6" className='h-full' />
            </SwiperSlide>
        </Swiper>
    )
};

export default Banner_Slider;