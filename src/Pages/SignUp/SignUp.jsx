import { FaUser, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white h-full py-10 sm:py-20 lg:py-32">
            <section className="flex flex-col sm:flex-row items-center gap-10">
                <Link to={'instructor'} 
                className="py-4 px-6 rounded flex items-center gap-3
                text-[#0f172a] dark:text-white  hover:bg-[#22c55e10]
                border border-gray-700 dark:border-gray-500 hover:border-[#22c55e]  dark:hover:border-[#22c55e] duration-300">
                    <FaUserTie size={20}/>
                    <h1>Sign Up as an Instructor</h1>
                </Link>
                <Link to={'student'} 
                className="py-4 px-6 rounded flex items-center gap-3
                text-[#0f172a] dark:text-white  hover:bg-[#22c55e10]
                border border-gray-700 dark:border-gray-500 hover:border-[#22c55e]  dark:hover:border-[#22c55e] duration-300">
                    <FaUser size={20}/>
                <h1>Sign Up as a Student</h1>
                </Link>
            </section>
        </section>
    );
};

export default SignUp;