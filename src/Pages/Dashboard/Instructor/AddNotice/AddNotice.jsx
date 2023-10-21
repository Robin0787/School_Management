import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { providerContext } from "../../../../Provider/Provider";


const AddNotice = () => {
    const { setUserBannerText } = useContext(providerContext);
    const [notice, setNotice] = useState();

    function publishNotice() {
        if (notice) {
           toast.success('Successful');
        }
    }


    // Changing Banner Text;
    useEffect(() => {
        setUserBannerText('Add Notice');
    }, [setUserBannerText]);


    return (
        <section className="bg-white text-black md:flex flex-col gap-20 justify-center items-center h-full w-full pt-10 pb-3">
            <section className="border w-3/4 py-14 rounded-md bg-[#0f172a]">
                <div className="flex items-center justify-center w-full relative">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[400px] h-[180px] border-2 border-[#808080] border-dashed hover:border-gray-300 rounded-lg cursor-pointer bg-transparent hover:bg-inherit duration-500 group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-12 h-12 mb-3 text-white duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-200 group-hover:text-white duration-300"><span className="font-semibold ">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-300 group-hover:text-white duration-300">
                                {
                                    notice ? notice.name : "PDF Only"
                                }
                            </p>

                        </div>
                        <input id="dropzone-file" type="file" className="hidden"
                            accept={['.pdf']}
                            onChange={(e) => setNotice(e.target.files[0])}
                        />
                    </label>
                </div>
                <div className="flex justify-center ">
                    <button onClick={publishNotice} disabled={!notice} className="w-[400px] text-sm py-3 bg-[#0f172a] text-white rounded mt-8 border border-white/50 hover:bg-white hover:text-black duration-500 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white">
                        Publish
                    </button>
                </div>
            </section>
        </section>
    );
};

export default AddNotice;