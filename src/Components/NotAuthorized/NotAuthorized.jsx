import { useContext } from "react";
import { Link } from "react-router-dom";
import { providerContext } from "../../Provider/Provider";


const NotAuthorized = () => {
    const { logOutUser } = useContext(providerContext);
    return (
        <section className='flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white h-screen duration-300'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='text-4xl font-bold italic'>
                    <h1>Your request is pending</h1>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10 text-sm px-10">
                    <button
                        onClick={() => { logOutUser() }}
                        className="w-full md:w-1/2 text-center py-3 rounded 
                bg-[#0f172a] text-white  dark:hover:bg-[#22c55e10] border border-gray-700 dark:border-gray-500 hover:border-[#22c55e]  dark:hover:border-[#22c55e] duration-300">
                        Log Out
                    </button>
                    <Link to="/" className="w-full md:w-1/2 text-center py-3 rounded bg-[#0f172a] text-white  dark:hover:bg-[#22c55e10]
                border border-gray-700 dark:border-gray-500 hover:border-[#22c55e]  dark:hover:border-[#22c55e] duration-300">
                        Back To Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotAuthorized;