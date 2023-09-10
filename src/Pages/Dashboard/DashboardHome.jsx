import { useContext, useEffect } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import { providerContext } from "../../Provider/Provider";

const DashboardHome = () => {
    const {setUserBannerText} = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('Dashboard Home!');
    }, [setUserBannerText]);

    return (
        <section >
            <HeaderTitle h="lg:h-[35vh]"/>
        </section>
    );
};

export default DashboardHome;