import AOS from 'aos';
import { Link } from "react-router-dom";
import AboutImg from "../../../assets/Home/Sections/about.png";

const About = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
        ring-1 ring-green-400 dark:ring-green-600 rounded duration-300"
        data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                <h1 className="absolute top-4 left-4 section_title">About Us</h1>
                    <img src={AboutImg} alt="" className="relative top-8 w-1/3 md:w-full mx-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2">
                        <a href="#" className="link">About Institute</a>
                        <a href="#" className="link">Former Headmaster</a>
                        <a href="#" className="link">Managing Committee</a>
                        <Link to="/teachers" className="link">Teachers List</Link>
                        <a href="#" className="link">Staff List</a>
                        <a href="#" className="link">Institute infrastructure</a>
                        <a href="#" className="link">Mission & vission</a>
                        <a href="#" className="link">Why Study Here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;