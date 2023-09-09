import { useContext, useEffect } from "react";
import HeaderTitle from "../../../../Components/HeaderTitle/HeaderTitle";
import { providerContext } from "../../../../Provider/Provider";

const AllStudents = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('All Students!');
    }, [setUserBannerText]);

    return (
        <section>
            <HeaderTitle h="35vh"/>
        </section>
    );
};

export default AllStudents;