import AOS from "aos";
import { Link } from "react-router-dom";
import GalleryImg from "../../../assets/Home/Sections/gallery.png";

const Gallery = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded md:h-full duration-300"
         data-aos="zoom-out" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Gallery</h1>
                    <img src={GalleryImg} alt="" className="relative top-8 md:top-[70px] image-icon" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-10">
                        <Link className="section-link">Events</Link>
                        <Link className="section-link">General Photos</Link>
                        <Link className="section-link">General Videos</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;