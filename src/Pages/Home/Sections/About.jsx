import AOS from 'aos';
import { Link } from "react-router-dom";
import AboutImg from "../../../assets/Home/Sections/about.png";

const About = () => {
    AOS.init();
    return (
        <div className="relative p-5 bg-white dark:bg-[#0f172a] text-black dark:text-white
        ring-1 ring-green-400 dark:ring-green-600 h-full rounded duration-300"
        data-aos="fade-up" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                <h1 className="absolute top-4 left-4 section_title">About Us</h1>
                    <img src={AboutImg} alt="" className="relative top-8 image-icon" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-2 mt-2">
                        <Link className="section-link">About Institute</Link>
                        <Link className="section-link">Former Headmaster</Link>
                        <Link className="section-link">Managing Committee</Link>
                        <Link to="/teachers" className="section-link">Teachers List</Link>
                        <Link className="section-link">Staff List</Link>
                        <Link className="section-link">Institute infrastructure</Link>
                        <Link className="section-link">Mission & vision</Link>
                        <Link className="section-link">Why Study Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;