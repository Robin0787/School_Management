// hover:bg-[#22c55e10] dark:hover:border-[#22c55e]

const SubmitBtn = ({text}) => {
    return (
        <>
            <button type="submit" className="px-5 py-[10px] 
            rounded  mt-10 w-full text-[#0f172a] dark:text-white bg-[#80808050]
            hover:bg-[#80808080] border border-gray-500 dark:border-[#808080]
             duration-300 ">{text}</button>
        </>
    );
};

export default SubmitBtn;