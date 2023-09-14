import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { FaUsersSlash } from "react-icons/fa";
import { LuUserCheck } from "react-icons/lu";
import { TbUsers, TbUsersPlus } from "react-icons/tb";
import { providerContext } from "../../Provider/Provider";

const DashboardHome = () => {
    const { setUserBannerText } = useContext(providerContext);

    const { data: instructorStats = {}, isLoading } = useQuery({
        queryKey: ['instructor-stats'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/get-instructor-stats`;
            const res = await axios.get(url);
            return res.data;
        }
    })

    console.log(instructorStats);

    useEffect(() => {
        setUserBannerText('Dashboard Home!');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black p-10">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                <article className="px-8 py-6 bg-blue-500 text-white rounded-md">
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
                </article>
                <article className="px-8 py-6 bg-green-500 text-white rounded-md">
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
                </article>
                <article className="px-8 py-6 bg-purple-500 text-white rounded-md">
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
                </article>
                <article className="px-8 py-6 bg-red-500 text-white rounded-md">
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
                </article>
            </section>
        </section>
    );
};

export default DashboardHome;