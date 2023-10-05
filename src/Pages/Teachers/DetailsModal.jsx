import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

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
          <div className='fixed inset-0 bg-black bg-opacity-25' />
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
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl p-5 text-left align-middle shadow-xl  bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300'>
                <Dialog.Title
                  as='h3'
                  className=''
                >
                  <img src={teacherInfo.img} className='w-full rounded-md'/>
                </Dialog.Title>
                <div className='relative mt-3'>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h1><span className='text-gray-600 dark:text-gray-300'>Name</span> : {teacherInfo?.name}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Age</span> : {teacherInfo?.age} Years</h1>
                  </div>
                   <div className="flex flex-col sm:flex-row justify-between items-center pb-3">
                   <h1><span className='text-gray-600 dark:text-gray-300'>Subject</span> : {teacherInfo?.subject}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Location</span> : {teacherInfo?.location}</h1>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center pt-2 pb-1 border-t border-gray-600">
                    <h1><span className='text-gray-600 dark:text-gray-300'>Phone</span> : {teacherInfo?.phone}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Experience</span> : {teacherInfo?.experience_years} Years</h1>
                  </div>
                    <h1 className='pb-1'><span className='text-gray-600 dark:text-gray-300'>Qualification</span> : {teacherInfo?.qualification}</h1>
                    <h1><span className='text-gray-600 dark:text-gray-300'>Email</span> : {teacherInfo?.email}</h1>
                </div>
                <div className='flex mt-5 justify-center items-center'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-green-900 hover:bg-green-600/10 hover:text-green-500 hover:border-green-500 duration-300'
                    onClick={() => {setDetailsModal(false)}}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DetailsModal;