import AOS from "aos";
import HeadTeacherImg from "../../../assets/Home/Sections/head.jpg";

const HeadTeacher = () => {
    AOS.init();
    return (
        <section className="w-full" data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="relative">
                <h1 className="font-Nunito text-2xl font-semibold text-black dark:text-white ">Head Teacher</h1>
                <div className="bottom"></div>
            </div>
            <div className="relative mt-10">
                <img src={HeadTeacherImg} alt="" className="w-full rounded" />
                <div className="flex justify-center items-center">
                    <h3
                        className="relative -top-4 bg-white dark:bg-[#162446d2] text-center px-3 pb-1 rounded-full font-Themify text-lg font-thin text-black dark:text-white">
                        Chris Thompson
                    </h3>
                </div>
                <div className="bg-white dark:bg-[#162446] px-2 py-2 italic font-thin  text-center">
                    <q>An investment in knowledge pays the best interest</q>
                </div>

            </div>
        </section>
    );
};

export default HeadTeacher;