import Lottie from "lottie-react";
import loading from '../../assets/loading.json';
const Loader2 = () => {
    return (
        <section className="h-full">
            <Lottie animationData={loading} loop={true} className="h-full text-sm"/>
        </section>
    );
};

export default Loader2;