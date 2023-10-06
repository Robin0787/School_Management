import AOS from "aos";
import { Link } from "react-router-dom";
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
                    <img src={CoCurriculumImg} alt="" className="relative top-12 md:top-6 image-icon " />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative top-2 md:top-8">
                        <Link className="section-link">Sports</Link>
                        <Link className="section-link">Tours</Link>
                        <Link className="section-link">Scout</Link>
                        <Link className="section-link">BNCC</Link>
                        <Link className="section-link">Computer Club</Link>
                        <Link className="section-link">Cultural Club</Link>
                        <Link className="section-link">Photography Club</Link>
                        <Link className="section-link">Debate Club</Link>
                        <Link className="section-link">Science Club</Link>
                        <Link className="section-link">Language Club</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoCurriculum;