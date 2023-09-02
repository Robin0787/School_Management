// hover:bg-[#22c55e10] dark:hover:border-[#22c55e]

const SubmitBtn = ({text}) => {
    return (
        <>
            <button type="submit" 
            className="px-5 py-[10px] rounded  mt-10 w-full text-inherit 
            bg-[#80808050] hover:bg-[#22c55e10] 
            border border-gray-500 hover:border-[#22c55e] duration-300">
                {text}
            </button>
        </>
    );
};

export default SubmitBtn;