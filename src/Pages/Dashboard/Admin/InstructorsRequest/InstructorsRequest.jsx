import { useContext, useEffect } from "react";
import HeaderTitle from "../../../../Components/HeaderTitle/HeaderTitle";
import { providerContext } from "../../../../Provider/Provider";

const InstructorRequests = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('Instructor Requests!');
    }, [setUserBannerText]);
    
    return (
        <section>
            <HeaderTitle h="lg:h-[35vh]"/>
        </section>
    );
};

export default InstructorRequests;