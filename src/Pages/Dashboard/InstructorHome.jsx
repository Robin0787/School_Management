import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { FaUsersSlash } from "react-icons/fa";
import { LuUserCheck } from "react-icons/lu";
import { TbUsers, TbUsersPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import ContentLoader from "../../Components/ContentLoader/ContentLoader";
import { providerContext } from "../../Provider/Provider";


const InstructorHome = () => {
    const { setUserBannerText } = useContext(providerContext);

    const { data: instructorStats = {}, isLoading } = useQuery({
        queryKey: ['instructor-stats'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/get-instructor-stats`;
            const res = await axios.get(url);
            return res.data;
        }
    })

    useEffect(() => {
        setUserBannerText('Instructor Home');
    }, [setUserBannerText]);


    const cardStyle = `px-8 py-6 text-white rounded-md`;
    return (
        <section className="bg-white text-black p-10">
            {
                isLoading ?
                    <ContentLoader />
                    :
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        <Link to={'/dashboard/students'} className={`${cardStyle} bg-blue-500 ring-2 ring-blue-300 hover:ring-8 hover:ring-blue-200 duration-300`}>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex justify-center items-center gap-5">
                                    <TbUsers size={50} />
                                    <h1 className="text-5xl font-bold text-center">
                                        {instructorStats?.['current-students']}
                                    </h1>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-lg  whitespace-nowrap">All Students</h1>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/dashboard/students-request'} className={`${cardStyle} bg-green-500 ring-2 ring-green-300 hover:ring-8 hover:ring-green-200 duration-300`}>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex justify-center items-center gap-5">
                                    <TbUsersPlus size={50} />
                                    <h1 className="text-5xl font-bold text-center">
                                        {instructorStats?.['student-requests']}
                                    </h1>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-lg  whitespace-nowrap">Students Request</h1>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/dashboard/approved-students'} className={`${cardStyle} bg-purple-500 ring-2 ring-purple-300 hover:ring-8 hover:ring-purple-200 duration-300`}>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex justify-center items-center gap-5">
                                    <LuUserCheck size={50} />
                                    <h1 className="text-5xl font-bold text-center">
                                        {instructorStats?.['approved-students']}
                                    </h1>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-lg  whitespace-nowrap">Approved Students</h1>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/dashboard/rejected-students'} className={`${cardStyle} bg-red-500 ring-2 ring-red-300 hover:ring-8 hover:ring-red-200 duration-300`}>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex justify-center items-center gap-5">
                                    <FaUsersSlash size={50} />
                                    <h1 className="text-5xl font-bold text-center">
                                        {instructorStats?.['rejected-students']}
                                    </h1>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-lg  whitespace-nowrap">Rejected Students</h1>
                                </div>
                            </div>
                        </Link>
                    </section>
            }
        </section>
    );
};

export default InstructorHome;