import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import UpdateCurrentStudent from '../../APIs/UpdateCurrentStudent';
import ListDropdown from '../ListDropdown/ListDropdown';
import Loader from '../Loader/Loader';
import styles from "./EditStudentModal.module.css";


const classes = ["Six", "Seven", "Eight", 'Nine', "Ten"];
const genders = ['Male', 'Female'];
const groups = ['Science', 'Arts', 'Commerce'];

const EditStudentModal = ({ prop, openModal, setOpenModal, refetch }) => {
  const [selectedClass, setSelectedClass] = useState(prop?.class);
  const [selectedGender, setSelectedGender] = useState(prop?.gender);
  const [selectedGroup, setSelectedGroup] = useState(prop?.group);
  const [showGroup, setShowGroup] = useState((prop.class == 'Nine' || prop.class == 'Ten') ? true : false);
  const [formLoading, setFormLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();


  function updateStudent(data) {
    if (!selectedClass) {
      setError('class');
      return;
    }
    if (!selectedGender) {
      setError('gender');
      return;
    }
    if (showGroup) {
      if (!selectedGroup) {
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
    UpdateCurrentStudent(studentInfo, prop._id)
    .then(data => {
      setFormLoading(false);
      setOpenModal(false);
      refetch();
      toast.success('Successful');
    })
    .catch(err => {
      setFormLoading(false);
      setOpenModal(false);
      toast.error('Error!!');
      console.log(err);
    })
  }

  const handleClassList = (selectedItem) => {
    setSelectedClass(selectedItem);
    clearErrors('class');
    if (selectedItem === 'Nine' || selectedItem === 'Ten') {
      setShowGroup(true);
    } else {
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

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => { setOpenModal(false) }}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-80' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-[600px]  transform overflow-hidden rounded bg-[#0f172a] text-white text-left align-middle transition-all'>
                <section>
                  <section className="px-16 py-5 h-full">
                    <section className="w-full">
                      <form onSubmit={handleSubmit(updateStudent)} className="py-5 space-y-5 lg:space-y-8 w-full">
                        <article className="w-full flex flex-col gap-8 ">
                          {/* First Row */}
                          <div className="flex flex-col md:flex-row items-center gap-7">
                            {/* Name Field */}
                            <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                              <input type="text" autoComplete="off"
                                defaultValue={prop?.name}
                                className={styles.inputField}
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
                              defaultValue={prop?.roll}
                                {...register('roll', { required: true })}
                              />
                              {
                                errors.roll && <span className="absolute -top-2 
                                        left-[63px] text-red-500 z-10">*</span>
                              }
                              <span className={styles.inputTitle}>Roll</span>
                            </div>
                          </div>

                          {/* Second Row */}
                          <div className="flex flex-col md:flex-row items-center gap-7">
                            {/* Class Name Dropdown */}
                            <div className="w-full md:w-1/2 relative">
                              <ListDropdown selected={selectedClass} items={classes}
                                handleList={handleClassList} title={"Class"} zIndex={11} />
                              <span className={`text-white text-[0.7em] tracking-[2px] absolute top-0 p-[0_18px_0_14px] z-60 translate-x-[10px] -translate-y-[7px] bg-[#0f172a] border-x border-[#808080] uppercase`}>Class</span>
                              {
                                errors.class && <span className="absolute -top-2 
                                        left-[73px] text-red-500 z-10">*</span>
                              }
                            </div>
                            {/* Father Name Field */}
                            <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                              <input type="text" autoComplete="off" className={styles.inputField}
                              defaultValue={prop?.father}
                                {...register('father', { required: true })}
                              />
                              {
                                errors.father && <span className="absolute -top-2 
                                        left-[124px] text-red-500 z-10">*</span>
                              }
                              <span className={styles.inputTitle}>Father Name</span>
                            </div>
                          </div>

                          {/* Third Row */}
                          <div className="flex flex-col md:flex-row items-center gap-7">
                            {/* Address Field */}
                            <div className={`w-full md:w-1/2 relative bg-[#0f172a] text-white`}>
                              <input type="text" autoComplete="off" className={styles.inputField}
                                defaultValue={prop?.address}
                                {...register('address', { required: true })}
                              />
                              {
                                errors.address && <span className="absolute -top-2 
                                        left-[92px] text-red-500 z-10">*</span>
                              }
                              <span className={styles.inputTitle}>Address</span>
                            </div>
                            {/* Gender Dropdown */}
                            <div className="w-full md:w-1/2 relative">
                              <ListDropdown selected={selectedGender} items={genders}
                                handleList={handleGenderList} title={"Gender"} zIndex={2} />
                              <span className={`text-white text-[0.7em] tracking-[2px] absolute top-0 p-[0_18px_0_14px] z-60 translate-x-[10px] -translate-y-[7px] bg-[#0f172a] border-x border-[#808080] uppercase`}>Gender</span>
                              {
                                errors.gender && <span className="absolute -top-2 
                                        left-[85px] text-red-500 z-10">*</span>
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
                                    handleList={handleGroupList} title={"Group"} zIndex={1} />
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
                        <div className='flex mt-5 gap-5 justify-between items-center'>
                          <button
                            type='button'
                            className='w-full inline-flex justify-center rounded border border-transparent bg-green-100 px-5 py-2 text-sm font-medium text-green-900 hover:text-white ring-2 ring-transparent hover:bg-green-500/10 hover:ring-green-500 duration-300'
                            onClick={() => { setOpenModal(false) }}
                          >
                            Cancel
                          </button>
                          <button
                            type='submit'
                            className='w-full inline-flex justify-center rounded border border-transparent bg-red-100 px-5 py-2 text-sm font-medium text-red-900 hover:text-white ring-2 ring-transparent hover:bg-red-600/10 hover:ring-red-500 duration-300'
                          >
                            {
                              formLoading ? <Loader size={20}/> : "Update"
                            }
                          </button>
                        </div>
                      </form>
                    </section>
                  </section>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default EditStudentModal;