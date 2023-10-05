import { Link } from "react-router-dom";
import AboutImg from "../../../assets/Home/Sections/about.png";

const About = () => {
    return (
        <div className="bg-[#0f172a] text-black dark:text-white dark:shadow-[0_0_8px] shadow-green-400
        rounded p-5 relative">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="w-full md:w-1/2">
                <h1 className="absolute top-4 left-4 testing">About Us</h1>
                    <img src={AboutImg} alt="" className="w-full relative top-8" />
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