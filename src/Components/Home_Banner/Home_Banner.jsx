import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/Home/Banner/img-1.jpg";
import img2 from "../../assets/Home/Banner/img-2.jpg";
import img3 from "../../assets/Home/Banner/img-3.jpg";
import img4 from "../../assets/Home/Banner/img-4.jpg";
import img5 from "../../assets/Home/Banner/img-5.jpg";
import img6 from "../../assets/Home/Banner/img-6.jpg";
import Container from '../Container';


const Home_Banner = () => {
    return (
        <Container>
            <Swiper pagination={true} 
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay, Pagination]} className="h-[70vh] cursor-grab">
                <SwiperSlide>
                    <img src={img1} alt="image-1" className='w-full object-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="image-2" className='w-full object-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="image-3" className='w-full object-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="image-4" className='w-full object-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="image-5" className='w-full object-cover h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="image-6" className='w-full object-cover h-full' />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Home_Banner;