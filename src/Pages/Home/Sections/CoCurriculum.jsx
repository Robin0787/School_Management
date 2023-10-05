import AOS from "aos";
import CoCurriculumImg from "../../../assets/Home/Sections/curriculum.png";
const CoCurriculum = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded md:h-[300px] duration-300"
         data-aos="zoom-out" data-aos-delay="100" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Co Curriculum</h1>
                    <img src={CoCurriculumImg} alt="" className="relative top-12 md:top-6 w-1/3 md:w-full mx-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative top-2 md:top-8">
                        <a href="#" className="link">Sports</a>
                        <a href="#" className="link">Tours</a>
                        <a href="#" className="link">Scout</a>
                        <a href="#" className="link">BNCC</a>
                        <a href="#" className="link">Computer Club</a>
                        <a href="#" className="link">Cultural Club</a>
                        <a href="#" className="link">Photography Club</a>
                        <a href="#" className="link">Debate Club</a>
                        <a href="#" className="link">Science Club</a>
                        <a href="#" className="link">Language Club</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoCurriculum;