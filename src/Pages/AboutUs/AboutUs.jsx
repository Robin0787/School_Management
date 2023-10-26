import { useContext, useEffect } from "react";
import { providerContext } from "../../Provider/Provider";

const AboutUs = () => {
    const { setIsBgImgTrue } = useContext(providerContext);

    useEffect(() => {
        setIsBgImgTrue(false);
    });

    return (
        <section className="min-h-screen">
            <section className="flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300 pt-24 pb-10 overflow-hidden">
                <h1 className="text-3xl text-center capitalize">Welcome To About Us Page!</h1>
            </section>
        </section>
    );
};

export default AboutUs;