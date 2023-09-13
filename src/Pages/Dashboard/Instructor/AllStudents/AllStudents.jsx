import { useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";

const AllStudents = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('All Students!');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pt-10">
            <h1 className="text-center text-3xl">All Students Page</h1>
        </section>
    );
};

export default AllStudents;