import { ImSpinner9 } from "react-icons/im";
 
const Loader = () => {
    return (
        <div className="flex justify-center items-center py-10 text-blue-500">
            <ImSpinner9 size={30} className="animate-spin duration-200"/>
        </div>
    );
};

export default Loader;