import AOS from "aos";
import { Link } from "react-router-dom";
import ResultImg from "../../../assets/Home/Sections/result.png";

const Result = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded md:h-[232px] duration-300"
         data-aos="flip-up" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Result</h1>
                    <img src={ResultImg} alt="" className="relative top-7 md:top-12 image-icon xl:w-[60%]" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-2">
                        <Link className="section-link">Public Results</Link>
                        <a href="#book-list" className="section-link">School Results</a>
                        <Link className="section-link">Board Result Link</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;