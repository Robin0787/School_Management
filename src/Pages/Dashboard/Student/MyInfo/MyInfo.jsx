import { useContext, useEffect } from "react";
import HeaderTitle from "../../../../Components/HeaderTitle/HeaderTitle";
import { providerContext } from "../../../../Provider/Provider";


const MyInfo = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('My Info!');
    }, [setUserBannerText]);

    return (
        <section>
            <HeaderTitle h="35vh"/>
        </section>
    );
};

export default MyInfo;