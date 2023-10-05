import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const DetailsModal = ({ detailsModal, setDetailsModal, teacherInfo }) => {


  return (
    <Transition appear show={detailsModal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => {setDetailsModal(false)}}>
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
              <Dialog.Panel className='w-full max-w-md transform rounded-xl p-5 text-left align-middle shadow-xl  bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300'>
                <Dialog.Title
                  as='h3'
                  className=''
                >
                  <img src={teacherInfo.img} className='w-full rounded-md'/>
                </Dialog.Title>
                <div className='relative mt-3'>
                  <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
                    <h1><span className='text-gray-600 dark:text-gray-300'>Name</span> : {teacherInfo?.name}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Age</span> : {teacherInfo?.age} Years</h1>
                  </div>
                   <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center pb-3">
                   <h1><span className='text-gray-600 dark:text-gray-300'>Subject</span> : {teacherInfo?.subject}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Address</span> : {teacherInfo?.location}</h1>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center pt-2 pb-1 border-t border-gray-600">
                    <h1><span className='text-gray-600 dark:text-gray-300'>Phone</span> : {teacherInfo?.phone}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Experience</span> : {teacherInfo?.experience_years} Years</h1>
                  </div>
                    <h1 className='pb-1'><span className='text-gray-600 dark:text-gray-300'>Qualification</span> : {teacherInfo?.qualification}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Email</span> : {teacherInfo?.email}</h1>
                </div>
                  <button
                    type='button'
                    className='absolute -top-3 -right-3 p-[6px] rounded-full bg-green-500 text-white ring-2 ring-green-500 hover:bg-transparent hover:text-green-500 duration-300'
                    onClick={() => {setDetailsModal(false)}}
                  >
                    <AiOutlineClose size={20}/>
                  </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DetailsModal;