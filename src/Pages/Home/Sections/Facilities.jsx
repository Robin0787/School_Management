import AOS from "aos";
import { Link } from "react-router-dom";
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
                    <img src={FacilitiesImg} alt="" className="relative top-12 image-icon xl:w-[70%]" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-8">
                        <Link className="section-link">Science Lab</Link>
                        <Link className="section-link">Computer Lab</Link>
                        <Link className="section-link">Library</Link>
                        <Link className="section-link">Play Ground</Link>
                        <Link className="section-link">Transportation</Link>
                        <Link className="section-link">Indoor Playground</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;