import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import ContentLoader from "../../../../Components/ContentLoader/ContentLoader";
import RejectedInstructorCard from "../../../../Components/RejectedInstructorCard/RejectedInstructorCard";
import { providerContext } from "../../../../Provider/Provider";


const RejectedInstructors = () => {
    const {setUserBannerText} = useContext(providerContext);

    const { data: rejectedInstructors = [], isLoading, refetch } = useQuery({
        queryKey: ['approved-instructors'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/rejected-instructors`;
            const res = await axios.get(url);
            return res.data;
        }
    })

    // Setting the banner text
    useEffect(() => {
        setUserBannerText('Rejected Instructors');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pb-10 lg:pb-5 pt-10 px-8">
            {
                isLoading ?
                    <ContentLoader />
                    :
                    (
                        rejectedInstructors.length > 0 ?
                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
                                {
                                    rejectedInstructors.map((item) =>
                                        <RejectedInstructorCard key={item._id} item={item} 
                                        refetch={refetch}/>)
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

export default RejectedInstructors;