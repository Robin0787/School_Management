import { useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";

const InstructorRequests = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('Instructor Requests!');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pt-10">
            <h1 className="text-center text-3xl">Instructors Request Page</h1>
        </section>
    );
};

export default InstructorRequests;