import { useState } from "react";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import DeleteRejectedInstructor from "../../APIs/DeleteRejectedInstructor";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Loader from "../Loader/Loader";

const RejectedInstructorCard = ({item, refetch}) => {
    const { _id, firstName, lastName, photo, email, phone, subject } = item;
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [loading, setLoading] = useState(false);

    function modalHandler(id) {
        setOpenDeleteModal(false);
        setLoading(true);
        DeleteRejectedInstructor(id)
        .then( () => {
            setLoading(false);
            toast.success('Deleted');
            refetch();
        })
        .catch( err => {
            setLoading(false);
            console.log(err);
        })
    }

    return (
        <div className="relative border rounded-md bg-[#0f172a] text-white">
            <img src={photo} alt="" className="h-32 w-[80%] rounded-lg mx-auto object-cover object-center my-5" />
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-xs text-center">
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
                                ${false ? 'bg-green-500 text-green-500' : "bg-red-500 text-red-500"} bg-opacity-20`}>{'Not Verified'}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-red-500 bg-opacity-90 py-2">
                <button
                    className="w-full text-center text-xs flex justify-center items-center gap-2"
                >
                    <MdOutlineCancel size={20}/>
                    <span>Rejected</span>
                </button>
            </div>
            <div className="absolute top-2 left-2">
                <button 
                onClick={() => {setOpenDeleteModal(true)}}
                className="bg-red-500 text-white p-2 rounded-full ring-2 ring-transparent hover:ring-red-500 duration-300">
                    {
                        loading ?
                        <Loader size={15}/>
                        :
                        <BsTrash size={15}/>
                    }
                </button>
            </div>
            <ConfirmModal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} modalHandler={modalHandler} prop={_id} />
        </div>
    );
};

export default RejectedInstructorCard;