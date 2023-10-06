import AOS from "aos";
import { Link } from "react-router-dom";
import AcademicInfoImg from "../../../assets/Home/Sections/academic.png";

const AcademicInfo = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded duration-300"
         data-aos="fade-up" data-aos-delay="100" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Academic Info</h1>
                    <img src={AcademicInfoImg} alt="" className="relative top-12 image-icon" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-8">
                        <Link className="section-link">Academic Fee</Link>
                        <a href="#book-list" className="section-link">Book List</a>
                        <Link className="section-link">Syllabus</Link>
                        <Link className="section-link">Holiday list</Link>
                        <Link className="section-link">Notices</Link>
                        <Link className="section-link">Academic Calender</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicInfo;