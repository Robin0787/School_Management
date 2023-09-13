import { useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";

const AddStudent = () => {
    const { setUserBannerText } = useContext(providerContext);

    // Changing Banner Text;
    useEffect(() => {
        setUserBannerText('Add Student');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black flex justify-center items-center h-[60vh] text-4xl">
            <h1>Add Student</h1>
        </section>
    );
};

export default AddStudent;