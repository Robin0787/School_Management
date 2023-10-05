import AOS from 'aos';
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
                    <img src={StudentCornerImg} alt="" className="relative top-12 w-1/3 md:w-[85%] mx-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-6">
                        <a href="#current_students" className="link">Our Student</a>
                        <a href="#" className="link">Fees Payment</a>
                        <a href="#" className="link">Dress Info</a>
                        <a href="#" className="link">Class Routine</a>
                        <a href="#" className="link">Exam Routine</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCorner;