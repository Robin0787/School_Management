import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SingleLink = ({item}) => {
    const { title, border, to } = item;
    return (
        <div className={`w-full flex justify-between gap-4 pb-2 ${border ? "border-b border-dashed border-gray-400 dark:border-[#ffffff1a]" : ""}`}>
            <Link to={to}className="text-white flex justify-start items-center gap-3">
                <FiArrowUpRight size={20} className="text-primary"/>
                <h4 className="text-[14px] font-[600] mb-[5px] text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer duration-300">{title}</h4>
            </Link>
        </div>
    );
};

export default SingleLink;