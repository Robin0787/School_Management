import { useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";


const AllInstructors = () => {
    const {setUserBannerText} = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('All Instructors!');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pt-10">
        <h1 className="text-center text-3xl">All Instructors Page</h1>
    </section>
    );
};

export default AllInstructors;