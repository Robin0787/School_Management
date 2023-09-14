import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import InstructorRequestCard from "../../../../Components/InstructorRequestCard/InstructorRequestCard";
import { providerContext } from "../../../../Provider/Provider";

const InstructorRequests = () => {
    const { setUserBannerText } = useContext(providerContext);

    const {data:instructorsRequest=[], isLoading} = useQuery({
        queryKey: ['instructors-request'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/instructors-request`;
            const res = await axios.get(url);
            return res.data;
        }
    });

    console.log(isLoading);
    console.log(instructorsRequest);

    useEffect(() => {
        setUserBannerText('Instructors Request');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pt-10 px-8 border">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
                {
                    instructorsRequest.map((item) => <InstructorRequestCard key={item._id} 
                    item={item}/>)
                }
            </section>
        </section>
    );
};

export default InstructorRequests;