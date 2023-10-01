import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ConfirmModal = ({ email, openModal, setOpenModal, modalHandler }) => {

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => {setOpenModal(false)}}>
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
              <Dialog.Panel className='w-[350px]  transform overflow-hidden rounded-md bg-[#0f172a] text-white py-8 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-xl font-medium text-center'
                > Are You Sure?
                </Dialog.Title>
                <div className='flex mt-8 gap-5 justify-center items-center'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded border border-transparent bg-green-100 px-3 py-1 text-sm font-medium text-green-900 ring-2 ring-transparent hover:bg-green-200 hover:ring-green-500 duration-300'
                    onClick={() => {setOpenModal(false)}}
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded border border-transparent bg-red-100 px-3 py-1 text-sm font-medium text-red-900 ring-2 ring-transparent hover:bg-red-200 hover:ring-red-500 duration-300'
                    onClick={() => modalHandler(email)}
                  >
                    Delete
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

export default ConfirmModal;