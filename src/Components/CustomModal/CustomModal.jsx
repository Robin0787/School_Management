import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CustomModal = ({ openModal, setModal, children }) => {

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => { setModal(false) }}>
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
          <div className='flex min-h-full items-center justify-center  text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='transform h-full rounded-lg shadow-xl bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300 p-4'>

                {children}

                <button
                  type='button'
                  className='absolute -top-4 -right-4 p-[6px] rounded-full ring-2 ring-white opacity-70 hover:opacity-100 duration-300'
                  onClick={() => { setModal(false) }}
                >
                  <AiOutlineClose size={20} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
};

export default CustomModal;