import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const reject = async (_id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/reject-student-request/${_id}`;
    const res = await axios.delete(url);
    return res.data;
}

const StudentRequestCard = ({ item, refetch }) => {
    const [loading, setLoading] = useState(false);
    const { _id } = item;
    const queryCLient = useQueryClient();
    
    const { mutate } = useMutation({
        mutationFn: reject,
        onSuccess: () => {
            toast.success('Rejected');
            queryCLient.invalidateQueries(['students-request']);
            setLoading(false);
        },
        onError: (err) => {
            toast.error('Error');
            console.log(err);
            setLoading(false);
        }
    });

    async function accept() {
        setLoading(true);
        const url = `${import.meta.env.VITE_BASE_URL}/store-approved-student/${_id}`;
        const res = await axios.post(url);
        // return res.data;
        if(res.data.deletedCount){
            setLoading(false);
            refetch();
        }
        else {
            setLoading(false);
            toast.error('Something Wrong Happened. Try Again!');
        }
    }
    
    return (
        <div className="border rounded-md bg-[#0f172a] text-white">
            <img src={item?.photo} alt="" className="h-32 w-32 rounded-full mx-auto object-cover object-center my-5" />
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-xs">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Name</td>
                            <td>:</td>
                            <td className="py-2  md:text-start md:pl-6">{item?.name}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Class</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.className}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Year</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.year}</td>
                        </tr>
                        <tr className="border-b border-gray-800 ">
                            <td className="py-2 md:text-start md:pl-8">Roll</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.roll}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Father</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.fatherName}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Address</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.address}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8">Phone</td>
                            <td>:</td>
                            <td className="py-2 md:text-start md:pl-6">{item?.phone}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start md:pl-8 whitespace-nowrap">Birth Date</td>
                            <td>:</td>
                            <td className="py-2 whitespace-nowrap md:text-start md:pl-6">{item?.dateOfBirth}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div 
            disabled={loading}
            className="bg-[#141d31] flex justify-between items-center gap-8 px-4 py-2">
                <button
                onClick={() => {setLoading(true);mutate(_id)}}
                className="w-1/2 text-center text-xs
                 bg-red-500 bg-opacity-10 border-red-500 py-2 border rounded hover:bg-opacity-30 
                 hover:shadow-[0px_0px_7px] hover:shadow-red-600 duration-300 disabled:cursor-wait"
                >
                    Reject
                </button>
                <button
                disabled={loading}
                className="w-1/2 text-center text-xs
                 bg-green-500 bg-opacity-10 border-green-500 py-2 border rounded hover:bg-opacity-30 hover:shadow-[0px_0px_7px] hover:shadow-green-600 duration-300 disabled:cursor-wait"
                    onClick={accept}>
                    Accept</button>
            </div>
        </div>
    );
};

export default StudentRequestCard;