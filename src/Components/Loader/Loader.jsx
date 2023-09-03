import { ImSpinner9 } from "react-icons/im";
 
const Loader = ({size}) => {
    return (
            <ImSpinner9 size={size} className="animate-spin duration-200"/>
    );
};

export default Loader;