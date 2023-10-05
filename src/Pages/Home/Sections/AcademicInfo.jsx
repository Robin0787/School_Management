import AOS from "aos";
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
                    <img src={AcademicInfoImg} alt="" className="relative top-12 w-1/3 md:w-full mx-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative md:top-8">
                        <a href="#" className="link">Academic Fee</a>
                        <a href="#book-list" className="link">Book List</a>
                        <a href="#" className="link">Syllabus</a>
                        <a href="#" className="link">Holiday list</a>
                        <a href="#" className="link">Notices</a>
                        <a href="#" className="link">Academic Calender</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicInfo;