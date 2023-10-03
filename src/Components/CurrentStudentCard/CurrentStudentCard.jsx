import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import EditStudentModal from "../EditStudentModal/EditStudentModal";
import Loader from "../Loader/Loader";

// prop, openModal, setOpenModal, modalHandler

const CurrentStudentCard = ({ item, refetch }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [loading, setLoading] =  useState(false);

    const getRandomBg = useCallback(() => {
        const backgrounds = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-purple-500', 'bg-sky-500', 'bg-red-500'];

        const random_number = Math.floor(Math.random() * backgrounds.length) + 0;
        return backgrounds[random_number];
    }, []);

    const deleteStudent = async (id) => {
        const url = `${import.meta.env.VITE_BASE_URL}/delete-current-student/${id}`;
        const res = await axios.delete(url);
        if(res.data?.deletedCount) {
            refetch();
            setLoading(false);
            toast('Student Deleted');
        }else {
            setLoading(false);
            toast.error('Error!');
            console.log(res.data);
        }
    }

    function handleDeleteModal (id) {
        setLoading(true);
        setOpenDeleteModal(false);
        deleteStudent(id);
    }

    function handleEditModal () {
        toast('Successful');
    }

    return (
        <div className="relative rounded-md bg-[#0f172a] text-white">
            <div className={`h-24 w-24 mx-auto my-5 rounded-full flex justify-center items-center ${getRandomBg()} bg-opacity-80`}>
                <h1 className="text-3xl text-center">{item.roll}</h1>
            </div>
            <div className="overflow-auto">
                <table className="w-full">
                    <tbody className="w-full text-center text-xs">
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start pl-8">Name</td>
                            <td>:</td>
                            <td className="py-2  md:text-start pl-6">{item?.name}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-2 md:text-start pl-8">Class</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.class}</td>
                        </tr>
                        <tr className="bg-[#141d31] border-b border-gray-800">
                            <td className="py-2 md:text-start pl-8">Roll</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.roll}</td>
                        </tr>
                        {
                            item.group && (
                                <tr className="border-b border-gray-800">
                                    <td className="py-2 md:text-start pl-8">Group</td>
                                    <td>:</td>
                                    <td className="py-2 md:text-start pl-6">{item?.group}</td>
                                </tr>
                            )
                        }
                        <tr className={`${item.group ? "bg-[#141d31]" : ""} border-b border-gray-800`}>
                            <td className="py-2 md:text-start pl-8">Father</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.father}</td>
                        </tr>
                        <tr className={`${item.group ? "" : "bg-[#141d31]"} border-b border-gray-800`}>
                            <td className="py-2 md:text-start pl-8">Address</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.address}</td>
                        </tr>
                        <tr className={`${item.group ? "bg-[#141d31]" : ""} border-b border-gray-800`}>
                            <td className="py-2 md:text-start pl-8">Gender</td>
                            <td>:</td>
                            <td className="py-2 md:text-start pl-6">{item?.gender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => {setOpenDeleteModal(true)}}
             className="absolute top-2 left-2 px-[10px] py-[6px] rounded text-red-500 hover:text-white bg-red-600 bg-opacity-20 hover:bg-opacity-100 border border-red-600 border-opacity-80 hover:border-opacity-100 duration-300">
                {
                    loading 
                    ? <Loader size={18}/> 
                    :
                    <BiTrashAlt size={18}/>
                }
            </button>
            <button onClick={() => {setOpenEditModal(true)}}
             className="absolute top-2 right-2 px-[10px] py-[6px] rounded text-white hover:text-green-500  bg-green-600 hover:bg-opacity-20 border border-green-600 border-opacity-100 hover:border-opacity-80 duration-300">
                <BiEdit size={18}/>
            </button>

            <ConfirmModal prop={item._id} openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} modalHandler={handleDeleteModal}/>
            
            <EditStudentModal prop={item._id} openModal={openEditModal} setOpenModal={setOpenEditModal} modalHandler={handleEditModal}/>
        </div>
    );
};

export default CurrentStudentCard;