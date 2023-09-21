import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import DeleteInstructorRequest from "../../APIs/DeleteInstructorRequest";
import StoreApprovedInstructor from "../../APIs/StoreApprovedInstructor";


const InstructorRequestCard = ({ item, refetch }) => {
    const { _id, firstName, lastName, photo, email, phone, subject } = item;
    const [acceptLoading, setAcceptLoading] = useState(false);
    const [rejectLoading, setRejectLoading] = useState(false);


    function handleAccept (id) {
        setAcceptLoading(true);
        StoreApprovedInstructor(id)
        .then(() => {
            setAcceptLoading(false);
            refetch();
        })
        .catch(err => {console.log(err);setAcceptLoading(false)});
    }

    async function handleReject (id) {
        setRejectLoading(true);
        DeleteInstructorRequest(id)
        .then(() => {
            setRejectLoading(false);
            refetch();
        })
        .catch(err => {console.log(err);setRejectLoading(false)});
    }
    
    return (
        <div className="border rounded-md bg-[#0f172a] text-white">
            <img src={photo} alt="" className="h-32 w-[80%] rounded-lg mx-auto object-cover object-center my-5" />
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-xs">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-5">Name</td>
                            <td>:</td>
                            <td className="py-2  md:text-start md:pl-5">{firstName + ' ' + lastName}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-5">Subject</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-5">{subject}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-5">Email</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-5">{email}</td>
                        </tr>
                        <tr className="border-b border-gray-800 ">
                            <td className="py-2 md:text-start md:pl-5">Phone</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-5">{phone}</td>
                        </tr>
                        <tr className="border-b border-gray-800 ">
                            <td className="py-2 md:text-start md:pl-5">Phone Verified</td>
                            <td>:</td>
                            <td className={`md:text-start md:pl-5`}>
                                <span className={`py-1 px-3 rounded-full 
                                ${true ? 'bg-green-500 text-green-500' : "bg-red-500 text-red-500"} bg-opacity-20`}>{'True'}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-[#141d31] flex justify-between items-center gap-8 px-4 py-2">
                <button
                    disabled={rejectLoading || acceptLoading}
                    onClick={() => {handleReject(_id)}}
                    className="w-1/2 text-center text-xs flex justify-center items-center
                 bg-red-500 bg-opacity-10 border-red-500 py-[6px] border rounded hover:bg-opacity-30 
                 hover:shadow-[0px_0px_7px] hover:shadow-red-600 duration-300 disabled:cursor-wait
                 "
                >
                    {
                        rejectLoading ?
                            <ImSpinner9 size={16} className="text-blue-500 animate-spin duration-200" />
                            :
                            'Reject'
                    }
                </button>
                <button
                    disabled={acceptLoading || rejectLoading}
                    onClick={() => {handleAccept(_id)}}
                    className="w-1/2 text-center text-xs flex justify-center items-center
                 bg-green-500 bg-opacity-10 border-green-500 py-[6px] border rounded hover:bg-opacity-30 hover:shadow-[0px_0px_7px] hover:shadow-green-600 duration-300 disabled:cursor-wait ">
                    {
                        acceptLoading ?
                            <ImSpinner9 size={16} className="text-blue-500 animate-spin duration-200" />
                            :
                            'Accept'
                    }
                </button>
            </div>
        </div>
    )
};

export default InstructorRequestCard;