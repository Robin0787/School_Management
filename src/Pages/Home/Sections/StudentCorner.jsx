import AOS from 'aos';
import { Link } from 'react-router-dom';
import StudentCornerImg from "../../../assets/Home/Sections/students.png";
const StudentCorner = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded md:h-[232px] duration-300"
         data-aos="zoom-in" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Student Corner</h1>
                    <img src={StudentCornerImg} alt="" className="relative top-12 image-icon xl:w-[70%]" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-10">
                        <a href="#current_students" className="section-link">Our Student</a>
                        <Link className="section-link">Fees Payment</Link>
                        <Link className="section-link">Dress Info</Link>
                        <Link className="section-link">Class Routine</Link>
                        <Link className="section-link">Exam Routine</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCorner;