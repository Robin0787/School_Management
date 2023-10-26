import { useContext, useEffect } from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { providerContext } from "../../Provider/Provider";

const SignUp = () => {
    const {setUserBannerText, setIsBgImgTrue} = useContext(providerContext);

    useEffect(() => {
        setIsBgImgTrue(true);
    });

    useEffect(() => {
        setUserBannerText('Sign Up Dear!');
    }, [setUserBannerText]);
    return (
        <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white h-full py-10 sm:py-20 lg:py-32">
            <section className="flex flex-col sm:flex-row items-center gap-10">
                <Link to={'instructor'} 
                className="py-4 px-6 rounded flex items-center gap-3
                bg-[#0f172a] text-white  
                border border-gray-700 dark:hover:bg-[#22c55e10]
                dark:border-gray-500 hover:border-[#22c55e]  dark:hover:border-[#22c55e] duration-300">
                    <FaUserTie size={20}/>
                    <h1>Sign Up as an Instructor</h1>
                </Link>
                <Link to={'student'} 
                className="py-4 px-6 rounded flex items-center gap-3
                bg-[#0f172a] text-white  dark:hover:bg-[#22c55e10]
                border border-gray-700 dark:border-gray-500 hover:border-[#22c55e]  dark:hover:border-[#22c55e] duration-300">
                    <FaUser size={20}/>
                <h1>Sign Up as a Student</h1>
                </Link>
            </section>
        </section>
    );
};

export default SignUp;