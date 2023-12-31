import AOS from 'aos';
import { Suspense, lazy, useContext, useEffect } from "react";
import { MdDateRange, MdSchool } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { providerContext } from '../../Provider/Provider';
import img from "../../assets/Home/Banner/img-1.jpg";
import Loader from "../Loader/Loader";
const Banner_Slider = lazy(() => import('../Banner_Slider/Banner_Slider'));

const Banner = () => {
    const {setIsBgImgTrue} = useContext(providerContext);

    useEffect(() => {
        setIsBgImgTrue(true);
    });
    
    AOS.init();
    return (
        <section className="h-[calc(100vh-0px)] bg-cover bg-center " style={{ backgroundImage: `url(${img})` }}>
            <section className="h-full flex justify-center">
                <section className="w-full flex justify-start items-center bg-gradient-to-r from-[#000000] to-[#00000030]">
                    <section className="lg:mt-10 w-[95%] xl:w-[90%] 2xl:w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden">
                        <section className="w-full md:w-1/2 pt-20 lg:pt-5 " 
                         data-aos="fade-right" data-aos-delay="50" data-aos-once="false" data-aos-mirror="false">
                            <div className="text-5xl lg:text-6xl 2xl:text-7xl text-left font-bold uppercase flex flex-col justify-start items-start gap-4 md:gap-7 xl:gap-8">
                                <h1 className="banner-title-1">Nasirnagar </h1>
                                <h1 className="banner-title-2">Ashutosh</h1>
                                <h1 className="banner-title-1">Pilot</h1>
                                <h1 className="banner-title-2">High School</h1>
                            </div>
                            <div
                                className="text-green-500 flex justify-start items-center gap-2 uppercase mt-6">
                                <SlLocationPin size={20} className="text-green-400" />
                                <p className="text-sm">Nasirnagar, Brahmanbaria, Chittagong</p>
                            </div>
                            <div
                                className="text-green-500 flex justify-start items-center gap-2 uppercase mt-2">
                                <MdDateRange size={20} />
                                <p className="text-sm">Established In 1934</p>
                            </div>
                            <div className="text-green-500 flex justify-start items-center gap-2 uppercase mt-2">
                                <MdSchool size={20}/>
                                <h1>EIIN 103446</h1>
                            </div>
                        </section>
                        <section className="w-full md:w-1/2"
                        data-aos="fade-left" data-aos-delay="200" data-aos-once="false" data-aos-mirror="false">
                            <Suspense fallback={<section className="flex justify-center items-center h-full w-full text-green-500"><Loader size={30}/></section>}>
                            <Banner_Slider />
                            </Suspense>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Banner;