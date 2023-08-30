import { PiNumberSixBold } from "react-icons/pi";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';

const Our_Classes = () => {
    return (
        <Container >
            <section>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <section className='flex justify-center items-center gap-1 border border-gray-300 px-6 py-3 rounded'>
                            <div className="bg-green-500 text-white rounded-full p-3">
                                <PiNumberSixBold size={30} className="" />
                            </div>
                            <div className=''>
                                <p className='text-xl font-bold uppercase'>Class Six</p>
                                <p className="text-sm">Subject : 7</p>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </section>
        </Container>
    );
};

export default Our_Classes;