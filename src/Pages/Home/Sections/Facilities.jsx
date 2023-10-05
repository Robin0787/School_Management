import AOS from "aos";
import FacilitiesImg from "../../../assets/Home/Sections/facilities.png";

const Facilities = () => {
    AOS.init();
    
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded duration-300"
         data-aos="zoom-in" data-aos-delay="100" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Facilities</h1>
                    <img src={FacilitiesImg} alt="" className="relative top-12 w-1/3 md:w-[80%] mx-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-8">
                        <a href="#" className="link">Science Lab</a>
                        <a href="#" className="link">Computer Lab</a>
                        <a href="#" className="link">Library</a>
                        <a href="#" className="link">Play Ground</a>
                        <a href="#" className="link">Transportation</a>
                        <a href="#" className="link">Indoor Playground</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;