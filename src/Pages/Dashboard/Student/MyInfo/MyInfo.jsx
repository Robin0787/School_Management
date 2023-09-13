import { useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";


const MyInfo = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('My Info!');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black pt-10">
            <h1 className="text-center text-3xl">My Info Page</h1>
        </section>
    );
};

export default MyInfo;