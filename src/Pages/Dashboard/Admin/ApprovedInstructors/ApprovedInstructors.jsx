import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import ApprovedInstructorCard from "../../../../Components/ApprovedInstructorCard/ApprovedInstructorCard";
import ContentLoader from "../../../../Components/ContentLoader/ContentLoader";
import { providerContext } from "../../../../Provider/Provider";


const ApprovedInstructors = () => {
    const { setUserBannerText } = useContext(providerContext);

    const { data: approvedInstructors = [], isLoading } = useQuery({
        queryKey: ['approved-instructors'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/approved-instructors`;
            const res = await axios.get(url);
            return res.data;
        }
    })

    useEffect(() => {
        setUserBannerText('Approved Instructors');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black py-10 px-8">
            {
                isLoading ?
                    <ContentLoader />
                    :
                    (

                        approvedInstructors.length > 0 ?
                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
                                {
                                    approvedInstructors.map((item) =>
                                        <ApprovedInstructorCard key={item._id} item={item} />)
                                }
                            </section>
                            :
                            <section className="flex justify-center items-center h-[35vh]">
                                <h1 className="text-xl font-bold">No request is available!</h1>
                            </section>
                    )
            }
        </section>
    );
};

export default ApprovedInstructors;