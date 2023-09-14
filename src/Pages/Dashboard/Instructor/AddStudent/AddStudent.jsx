import { useContext, useEffect } from "react";
import SubmitBtn from "../../../../Components/SubmitBtn/SubmitBtn";
import { providerContext } from "../../../../Provider/Provider";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import StoreCurrentStudent from "../../../../APIs/StoreCurrentStudent";
import ListDropdown from "../../../../Components/ListDropdown/ListDropdown";
import styles from "./AddStudent.module.css";

const classes = ["Six", "Seven", "Eight", 'Nine', "Ten"];
const genders = ['Male', 'Female'];
const groups = ['Science', 'Arts', 'Commerce'];

const AddStudent = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [showGroup, setShowGroup] = useState(false);
    const navigate = useNavigate();
    const { setUserBannerText } = useContext(providerContext);
    const [formLoading, setFormLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, setError, clearErrors, reset } = useForm();


    function handleAddStudent(data) {
        if (!selectedClass) {
            setError('class');
            return;
        }
        if (!selectedGender) {
            setError('gender');
            return;
        }
        if(showGroup) {
            if(!selectedGroup) {
                setError('group');
                return;
            }
        }
        setFormLoading(true);
        const studentInfo = {
            ...data,
            class: selectedClass,
            gender: selectedGender,
            group: showGroup && selectedGroup
        }
        StoreCurrentStudent(studentInfo)
        .then(() => {
            setFormLoading(false);
            reset();
            toast.success('Student Added', {
                icon: '👏',
                position: "bottom-center"
            });
            navigate('/dashboard/students');
        })
        .catch(err => { console.log(err); setFormLoading(false)});

    }

    const handleClassList = (selectedItem) => {
        setSelectedClass(selectedItem);
        clearErrors('class');
        if(selectedItem === 'Nine' || selectedItem === 'Ten') {
            setShowGroup(true);
        }else {
            setShowGroup(false);
        }
    }
    const handleGenderList = (selectedItem) => {
        setSelectedGender(selectedItem);
        clearErrors('gender');
    }
    const handleGroupList = (selectedItem) => {
        setSelectedGroup(selectedItem);
        clearErrors('group');
    }
    // Changing Banner Text;
    useEffect(() => {
        setUserBannerText('Add Student');
    }, [setUserBannerText]);

    return (
        <section className="bg-white text-black md:flex justify-center items-center h-full w-full pt-10 pb-3">
            <section className="px-16 py-6 border rounded-lg bg-[#0f172a] h-full">
                <section className="w-full">
                    <form onSubmit={handleSubmit(handleAddStudent)} className="py-5 space-y-5 lg:space-y-8 w-full">
                        <article className="w-full flex flex-col gap-8 ">

                            {/* First Row */}
                            <div className="flex flex-col md:flex-row items-center gap-7">
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
                            </div>

                            {/* Second Row */}
                            <div className="flex flex-col md:flex-row items-center gap-7">
                                {/* Class Name Dropdown */}
                                <div className="w-full md:w-1/2 relative">
                                    <ListDropdown selected={selectedClass} items={classes}
                                        handleList={handleClassList} title={"Class"} zIndex={11}/>
                                    <span className={`text-white text-[0.7em] tracking-[2px] absolute top-0 p-[0_18px_0_14px] z-60 translate-x-[10px] -translate-y-[7px] bg-[#0f172a] border-x border-[#808080] uppercase`}>Class</span>
                                    {
                                        errors.class && <span className="absolute -top-2 
                                        left-[76px] text-red-500 z-10">*</span>
                                    }
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

                            {/* Third Row */}
                            <div className="flex flex-col md:flex-row items-center gap-7">
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
                                {/* Gender Dropdown */}
                                <div className="w-full md:w-1/2 relative">
                                    <ListDropdown selected={selectedGender} items={genders}
                                        handleList={handleGenderList} title={"Gender"} zIndex={2}/>
                                    <span className={`text-white text-[0.7em] tracking-[2px] absolute top-0 p-[0_18px_0_14px] z-60 translate-x-[10px] -translate-y-[7px] bg-[#0f172a] border-x border-[#808080] uppercase`}>Gender</span>
                                    {
                                        errors.gender && <span className="absolute -top-2 
                                        left-[86px] text-red-500 z-10">*</span>
                                    }
                                </div>
                            </div>

                            {/* Fourth Row */}
                            {
                                showGroup && (
                                    <div className="flex flex-col md:flex-row items-center gap-7">
                                        {/* Group Dropdown */}
                                        <div className="w-full md:w-1/2 relative">
                                            <ListDropdown selected={selectedGroup} items={groups}
                                                handleList={handleGroupList} title={"Group"} zIndex={1}/>
                                            <span className={`text-white text-[0.7em] tracking-[2px] absolute top-0 p-[0_18px_0_14px] z-60 translate-x-[10px] -translate-y-[7px] bg-[#0f172a] border-x border-[#808080] uppercase`}>Group</span>
                                            {
                                                errors.group && <span className="absolute -top-2 
                                        left-[80px] text-red-500 z-10">*</span>
                                            }
                                        </div>
                                        <div className="w-full md:w-1/2 relative"></div>
                                    </div>
                                )
                            }

                        </article>
                        <div className={`text-white`}>
                            <SubmitBtn text={'Add Student'} loading={formLoading} />
                        </div>
                    </form>
                </section>
            </section>
        </section >
    );
};

export default AddStudent;