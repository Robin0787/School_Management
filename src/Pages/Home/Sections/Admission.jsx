import AOS from 'aos';
import AdmissionImg from "../../../assets/Home/Sections/admisson.png";

const Admission = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
         ring-1 ring-green-400 dark:ring-green-600 rounded md:h-full duration-300"
         data-aos="flip-down" data-aos-delay="100" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                    <h1 className="absolute top-3 left-4 section_title">Admission</h1>
                    <img src={AdmissionImg} alt="" className="relative top-8 md:top-12 w-1/3 md:w-full mx-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2 relative top-3 md:top-8">
                        <a href="#" className="link">Admission Information</a>
                        <a href="#" className="link">Apply Online</a>
                        <a href="#" className="link">Prospectus</a>
                        <a href="#" className="link">Admission Form</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;