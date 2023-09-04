import { MdDateRange } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import img from "../../assets/Home/Banner/img-1.jpg";
import Banner_Slider from "../Banner_Slider/Banner_Slider";
const Banner = () => {
    return (
        <section className="h-[calc(100vh-0px)] bg-[#808080] bg-cover" style={{ backgroundImage: `url(${img})` }}>
            <section className=" h-full 
            flex justify-center ">
                <section className="w-full flex justify-start items-center
                bg-gradient-to-r from-[#000000] to-[#00000030]">
                    <section className="w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center border">
                        <section className="w-full md:w-1/2 lg:pt-5 border">
                            <div className="text-4xl sm:text-5xl lg:text-6xl text-left font-bold uppercase flex flex-col justify-start items-start gap-4 md:gap-5 lg:gap-7 xl:gap-8">
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
                        </section>
                        <section className="w-full md:w-1/2 flex justify-center items-center">
                            <Banner_Slider />
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Banner;