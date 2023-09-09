// hover:bg-[#22c55e10] dark:hover:border-[#22c55e]

import { ImSpinner9 } from "react-icons/im";

const SubmitBtn = ({ text, loading }) => {
    return (
        <>
            <button type="submit"
                disabled={loading}
                className="px-5 py-[10px] rounded w-full text-inherit 
                flex justify-center items-center text-white
            bg-[#80808050] hover:bg-[#22c55e10] 
            border border-gray-500 hover:border-[#22c55e] duration-300
            disabled:cursor-wait disabled:hover:bg-[#80808050] disabled:hover:border-gray-500">
                {
                    loading ?
                        <ImSpinner9 size={25} className="animate-spin "/>
                        :
                        text
                }
            </button>
        </>
    );
};

export default SubmitBtn;