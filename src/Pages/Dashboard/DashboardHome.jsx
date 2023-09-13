import { useContext, useEffect } from "react";
import { providerContext } from "../../Provider/Provider";

const DashboardHome = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('Dashboard Home!');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pt-10">
            <h1 className="text-center text-3xl">Dashboard Home Page</h1>
        </section>
    );
};

export default DashboardHome;