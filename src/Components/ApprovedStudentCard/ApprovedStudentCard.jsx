import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Loader from "../Loader/Loader";

const ApprovedStudentCard = ({item, refetch}) => {
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    async function handleDelete (email) {
        const url = `${import.meta.env.VITE_BASE_URL}/delete-approved-student/${email}`;
        const res = await axios.delete(url);
        if(res.data?.deletedCount) {
            refetch();
            toast.success('Deleted');
        } else {
            toast.error('Something Wrong!!');
            console.log(res.data);
        }
    }
    
    function modalHandler (email) {
        setLoading(true);
        setOpenModal(false);
        handleDelete(email);
    }
    
    return (
        <div className="border relative rounded-md bg-[#0f172a] text-white">
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
            <div className="absolute top-3 left-3">
                <button 
                onClick={() => {setOpenModal(true)}}
                className="bg-red-500 text-white p-2 rounded-full ring-2 ring-transparent hover:ring-red-500 duration-300">
                    {
                        loading ?
                        <Loader size={20}/>
                        :
                        <BsTrash size={20}/>
                    }
                </button>
            </div>
            <ConfirmModal prop={item.email} openModal={openModal} setOpenModal={setOpenModal} modalHandler={modalHandler}/>
        </div>
    );
};

export default ApprovedStudentCard;