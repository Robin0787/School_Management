import { useContext, useEffect } from "react";
import HeaderTitle from "../../../../Components/HeaderTitle/HeaderTitle";
import { providerContext } from "../../../../Provider/Provider";


const AllInstructors = () => {
    const {setUserBannerText} = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('All Instructors!');
    }, [setUserBannerText]);

    return (
        <section className="relative">
            <HeaderTitle h="35vh"/>
        </section>
    );
};

export default AllInstructors;