import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { providerContext } from "../../Provider/Provider";

import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn";
import blueTik from "../../assets/Dashboard/blueTik.png";
import styles from "./Profile.module.css";

const Profile = () => {
    const { user, userLoading } = useContext(providerContext);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    const { data: userDetails = {}, isLoading } = useQuery({
        queryKey: ['user-details'],
        disabled: !userLoading,
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/user/${user.email}`
            const res = await axios.get(url);
            return res.data;
        }
    })

    console.log(userDetails);

    return (
        <section className="h-[calc(100vh-40vh)] lg:h-[calc(100vh-35vh)]">
            <section className="h-full flex justify-center items-center bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300">
                <section className="flex justify-center items-center w-full h-full">
                    <section className="w-full md:w-[80%] mx-auto  flex flex-col md:flex-row justify-center items-center gap-2 h-full">
                        <article className="w-full md:w-[30%] space-y-2 md:overflow-hidden border">
                            <div>
                                <img src={userDetails.photo} alt="" className="object-cover object-center h-40 w-40 rounded-full mx-auto" />
                            </div>
                            {/* Name div */}
                            <div className="flex justify-center items-center gap-3">
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
                                    <tbody className="w-full text-xs text-center md:text-start">
                                        <tr className="border-b border-gray-800">
                                            <td className="py-2 md:pl-5">Position</td>
                                            <td>:</td>
                                            <td className="py-2 md:pl-5">{userDetails?.position}</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-2 md:pl-5">Role</td>
                                            <td>:</td>
                                            <td className="py-2 md:pl-5 capitalize">{userDetails?.role}</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-2 md:pl-5">Email</td>
                                            <td>:</td>
                                            <td className="py-2 md:pl-5">{userDetails?.email}</td>
                                        </tr>
                                        <tr className="border-b border-gray-800 ">
                                            <td className="py-2 md:pl-5">Phone</td>
                                            <td>:</td>
                                            <td className="py-2 md:pl-5">{userDetails?.phone}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </article>
                        <article className="w-full md:w-[70%] h-full flex justify-center items-center p-4 relative md:overflow-hidden">
                            <button onClick={() => { setOpenEditBox((prev) => !prev) }} className="capitalize text-sm px-8 py-3 rounded-md bg-transparent hover:bg-green-500 hover:bg-opacity-20 border border-green-500 hover:shadow-[0_0_8px] hover:shadow-green-400 duration-300">Edit you details</button>

                            <section className={`absolute w-full ${openEditBox ? 'left-0' : 'left-full'} duration-500 bg-[#0f172a] text-white`}>
                                <section className="border p-5 rounded">
                                    <form >
                                        <section className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10 w-full">
                                            <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-10">
                                                {/* First Name Field */}
                                                <div className={`relative bg-[#0f172a] text-white`}>
                                                    <input type="text" autoComplete="off"
                                                        className={styles.inputField}
                                                    />
                                                    <span className={styles.inputTitle}>First Name</span>
                                                </div>
                                                {/* Subject Field */}
                                                <div className={`relative bg-[#0f172a] text-white`}>
                                                    <input type="text" autoComplete="off"
                                                        className={styles.inputField}

                                                    />
                                                    <span className={styles.inputTitle}>Subject</span>
                                                </div>
                                            </article>
                                            <article className="w-full sm:w-1/2 flex flex-col gap-5 lg:gap-10">
                                                {/* Last name Field */}
                                                <div className={`relative bg-[#0f172a] text-white`}>
                                                    <input type="text" autoComplete="off"
                                                        className={styles.inputField}

                                                    />
                                                    <span className={styles.inputTitle}>Last Name</span>
                                                </div>
                                                {/* Phone Field */}
                                                <div className={`relative bg-[#0f172a] text-white`}>
                                                    <input type="number" autoComplete="off" className={styles.inputField}
                                                    />
                                                    <span className={styles.inputTitle}>Phone</span>
                                                </div>
                                            </article>
                                        </section>
                                        <div className="pt-8">
                                            <SubmitBtn text={'Update'} loading={formLoading} />
                                        </div>
                                    </form>
                                </section>
                            </section>
                        </article>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Profile;