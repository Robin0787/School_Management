import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import InstructorRequestCard from "../../../../Components/InstructorRequestCard/InstructorRequestCard";
import { providerContext } from "../../../../Provider/Provider";

const InstructorRequests = () => {
    const { setUserBannerText } = useContext(providerContext);

    const { data: instructorsRequest = [], isLoading, refetch } = useQuery({
        queryKey: ['instructors-request'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/instructors-request`;
            const res = await axios.get(url);
            return res.data;
        }
    });


    useEffect(() => {
        setUserBannerText('Instructors Request');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black py-10 px-8">
            {
                instructorsRequest.length > 0 ?
                    (
                        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
                            {
                                instructorsRequest.map((item) => <InstructorRequestCard key={item._id}
                                    item={item} refetch={refetch} />)
                            }
                        </section>
                    )
                    :
                    (
                        <section className="flex justify-center items-center h-[35vh]">
                            <h1 className="text-xl font-bold">No request is available!</h1>
                        </section>
                    )
            }
        </section>
    );
};

export default InstructorRequests;