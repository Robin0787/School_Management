import { useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";


const MyInfo = () => {
    const { setUserBannerText } = useContext(providerContext);

    useEffect(() => {
        setUserBannerText('My Info');
    }, [setUserBannerText]);

    return (
        <section className="bg-white h-full text-center text-black text-5xl pt-40">
        <h1>Welcome Dear!</h1>
        <p className="text-sm mt-2">Sorry I haven't completed this section!</p>
    </section>
    );
};

export default MyInfo;