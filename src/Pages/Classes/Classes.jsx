import { useContext, useEffect } from "react";
import { providerContext } from "../../Provider/Provider";


const Classes = () => {
    const { setIsBgImgTrue } = useContext(providerContext);

    useEffect(() => {
        setIsBgImgTrue(false);
    });
    
    return (
        <section>
            <h1>Classes</h1>
        </section>
    );
};

export default Classes;