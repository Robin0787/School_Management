import { useContext, useEffect } from "react";
import SubmitBtn from "../../../../Components/SubmitBtn/SubmitBtn";
import { providerContext } from "../../../../Provider/Provider";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AddStudent.module.css";

const AddStudent = () => {
    const { setUserBannerText } = useContext(providerContext);
    const [formLoading, setFormLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    function handleAddStudent(data) {
        setFormLoading(true);
        console.log(data);
        setFormLoading(false);
    }


    // Changing Banner Text;
    useEffect(() => {
        setUserBannerText('Add Student');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black md:flex justify-center items-center h-full w-full py-10">
            <section className="px-10 py-6 border rounded-lg bg-[#0f172a] h-full">
                <section className="w-full">
                    <form onSubmit={handleSubmit(handleAddStudent)} className="py-5 space-y-5 lg:space-y-8 w-full">
                        <article className="w-full flex flex-col gap-6 ">
                            {/* First Row */}
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {/* Name Field */}
                                <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('name', { required: true })}
                                    />
                                    {
                                        errors.name && <span className="absolute -top-2 
                                        left-[69px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Name</span>
                                </div>
                                {/* Class Field */}
                                <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('class', { required: true })}
                                    />
                                    {
                                        errors.class && <span className="absolute -top-2 
                                        left-[75px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Class</span>
                                </div>
                            </div>
                            {/* Second Row */}
                            <div className="flex flex-col md:flex-row items-center gap-5">
                                {/* Roll Field */}
                                <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                                    <input type="number" autoComplete="off" className={styles.inputField}
                                        {...register('roll', { required: true })}
                                    />
                                    {
                                        errors.roll && <span className="absolute -top-2 
                                        left-[65px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Roll</span>
                                </div>
                                {/* Gender Field */}
                                <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('gender', { required: true })}
                                    />
                                    {
                                        errors.gender && <span className="absolute -top-2 
                                        left-[86px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Gender</span>
                                </div>
                            </div>
                            {/* Third Row */}
                            <div className="flex flex-col md:flex-row items-center gap-5">
                                {/* Address Field */}
                                <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('address', { required: true })}
                                    />
                                    {
                                        errors.address && <span className="absolute -top-2 
                                        left-[94px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Address</span>
                                </div>
                                {/* Father Name Field */}
                                <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                                    <input type="text" autoComplete="off" className={styles.inputField}
                                        {...register('father', { required: true })}
                                    />
                                    {
                                        errors.father && <span className="absolute -top-2 
                                        left-[128px] text-red-500 z-10">*</span>
                                    }
                                    <span className={styles.inputTitle}>Father Name</span>
                                </div>
                            </div>
                        </article>
                        <div className={`text-white`}>
                            <SubmitBtn text={'Add Student'} loading={formLoading} />
                        </div>
                    </form>
                </section>
            </section>
        </section>
    );
};

export default AddStudent;