import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import ListDropdown from "../../../Components/ListDropdown/ListDropdown";
import { providerContext } from "../../../Provider/Provider";
import blueTik from "../../../assets/Dashboard/blueTik.png";
import styles from "./Profiles.module.css";

const genderList = ["Male", 'Female'];

const AdminProfile = () => {
    const { user, userLoading } = useContext(providerContext);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [selectedGender, setSelectedGender] = useState();
    const { register, handleSubmit, formState: { errors }, reset, setError, clearErrors } = useForm();

    const { data: userDetails = {} } = useQuery({
        queryKey: ['user-details'],
        disabled: !userLoading,
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/user/${user.email}`
            const res = await axios.get(url);
            return res.data;
        }
    });

    const onSubmit = (data) => {
        if(!selectedGender) {
            setError('gender');
            return;
        }
        const updatedData = {
            ...data,
            gender: selectedGender
        };
        console.log(updatedData);
    }

    const handleGenderSelection = useCallback((gender) => {
        setSelectedGender(gender);
        clearErrors('gender');
    }, [clearErrors]);

    return (
        <section className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center md:items-end gap-5 md:gap-10 h-full pb-10">
            {/* Left Section */}
            <article className="w-full md:w-[30%] md:overflow-hidden  pt-5">
                <div>
                    <img src={userDetails.photo} alt="" className="object-cover object-center h-40 w-40 rounded-full mx-auto" />
                </div>
                {/* Name div */}
                <div className="flex justify-center items-center gap-3 mt-3 mb-5">
                    <h1 className="text-center text-xl capitalize whitespace-nowrap">
                        {
                            userDetails.firstName
                                ?
                                userDetails?.firstName + " " + userDetails?.lastName
                                :
                                userDetails.name
                        }
                    </h1>
                    <img src={blueTik} className="h-4 w-4 object-cover object-center" alt="" />
                </div>
                {/* More Details */}
                <div className="overflow-auto">
                    <table className="w-full">
                        <tbody className="w-full text-xs text-center ">
                            {
                                userDetails.position &&
                                <tr className="bg-gray-800">
                                    <td className="py-3 md:pl-5">Position</td>
                                    <td>:</td>
                                    <td className="py-3 md:pl-5">{userDetails?.position}</td>
                                </tr>
                            }
                            <tr className="bg-gray-950">
                                <td className="py-3 md:pl-5">Role</td>
                                <td>:</td>
                                <td className="py-3 md:pl-5 capitalize">{userDetails?.role}</td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="py-3 md:pl-5">Email</td>
                                <td>:</td>
                                <td className="py-3 md:pl-5">{userDetails?.email}</td>
                            </tr>
                            <tr className="bg-gray-950">
                                <td className="py-3 md:pl-5">Phone</td>
                                <td>:</td>
                                <td className="py-3 md:pl-5">{userDetails?.phone}</td>
                            </tr>
                            {
                                userDetails.className &&
                                <tr className="bg-gray-800">
                                    <td className="py-3 md:pl-5">Class</td>
                                    <td>:</td>
                                    <td className="py-3 md:pl-5">{userDetails?.className}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </article>
            <hr className="" />
            {/* Right Section means edit section */}
            <article className={`w-full md:w-[70%] ${openEditBox ? "h-[50vh] md:h-full" : "h-full"} flex justify-center items-end relative md:overflow-hidden duration-300`}>
                <button onClick={() => { setOpenEditBox((prev) => !prev) }} className="capitalize text-sm px-8 py-3 rounded-md bg-transparent hover:bg-green-500 hover:bg-opacity-20 border border-green-500 hover:shadow-[0_0_8px] hover:shadow-green-400 duration-500 delay-100">Edit Profile</button>

                <section className={`absolute w-full ${openEditBox ? 'left-0' : 'left-full'} duration-500 bg-[#0f172a] text-white`}>
                    <section className="px-5 md:px-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <section className="flex flex-col sm:flex-row items-center gap-5 lg:gap-8 w-full">
                                <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-8">
                                    {/* First Name Field */}
                                    <div className={`relative bg-[#0f172a] text-white`}>
                                        <input type="text"
                                            defaultValue={userDetails?.firstName}
                                            autoComplete="off"
                                            className={styles.inputField}
                                            {...register('firstName', { required: true })}
                                        />
                                        <span className={styles.inputTitle}>First Name</span>
                                        {
                                        errors.firstName && <span className="absolute -top-2 
                                        left-[116px] text-red-500 z-10">*</span>
                                        }
                                    </div>
                                    {/* Gender Field */}
                                    <div className={`relative bg-[#0f172a] text-white`}>
                                        <ListDropdown items={genderList} selected={selectedGender} handleList={handleGenderSelection} title={'Gender'} zIndex={1} />
                                        {
                                        errors.gender && <span className="absolute top-4 
                                        left-[116px] text-red-500 z-10">*</span>
                                        }
                                    </div>
                                </article>
                                <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-8">
                                    {/* Last name Field */}
                                    <div className={`relative bg-[#0f172a] text-white`}>
                                        <input type="text"
                                            defaultValue={userDetails?.lastName}
                                            autoComplete="off"
                                            className={styles.inputField}
                                            {...register('lastName', { required: true })}
                                        />
                                        <span className={styles.inputTitle}>Last Name</span>
                                        {
                                        errors.lastName && <span className="absolute -top-2 
                                        left-[116px] text-red-500 z-10">*</span>
                                        }
                                    </div>
                                    {/* Phone Field */}
                                    <div className={`relative bg-[#0f172a] text-white`}>
                                        <input type="number"
                                            defaultValue={userDetails?.phone}
                                            autoComplete="off" className={styles.inputField}
                                            {...register('phone', { required: true })}
                                        />
                                        <span className={styles.inputTitle}>Phone</span>
                                        {
                                        errors.phone && <span className="absolute -top-2 
                                        left-[74px] text-red-500 z-10">*</span>
                                        }
                                    </div>
                                </article>
                            </section>
                            <div className="pt-5 lg:pt-8 flex justify-between items-center gap-5">
                                <div
                                    onClick={() => { setOpenEditBox(false) }}
                                    className="w-full text-center capitalize text-sm px-8 py-[10px] rounded-md bg-red-500 bg-opacity-20 border border-red-500 hover:shadow-[0_0_8px] hover:shadow-red-400 duration-500 cursor-pointer">
                                    Cancel
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-center capitalize text-sm px-8 py-[10px] rounded-md bg-green-500 bg-opacity-20 border border-green-500 hover:shadow-[0_0_8px] hover:shadow-green-400 duration-500">
                                    Update
                                </button>
                            </div>
                        </form>
                    </section>
                </section>
            </article>
        </section>
    );
};

export default AdminProfile;