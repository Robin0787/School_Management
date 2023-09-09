import { useContext, useEffect } from "react";
import HeaderTitle from "../../../../Components/HeaderTitle/HeaderTitle";
import { providerContext } from "../../../../Provider/Provider";



const StudentsRequest = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('Students Request!');
    }, [setUserBannerText]);

    return (
        <section>
            <HeaderTitle h="35vh"/>
        </section>
    );
};

export default StudentsRequest;