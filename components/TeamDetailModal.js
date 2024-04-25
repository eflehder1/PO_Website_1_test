import classNames from 'classnames';

import { CrossIcon } from './icons';

const modalBackdrop =
  'bg-black fixed inset-0 z-[1000] h-full opacity-50 block transition-opacity duration-150 ease-linear';
const modal =
  'transition-all duration-300 ease-in-out delay-[0.2s] mx-auto fixed inset-0 z-[55555] overflow-auto outline-0 text-center box-border before:w-0 before:h-full before:align-middle before:inline-block';
const modalDialog =
  'relative top-0 inline-block pb-0 text-start align-middle mx-auto w-full sm:w-auto';

export const TeamDetailModal = ({
  openModal,
  closeModal,
  width,
  selectedUser,
}) => (
  <div>
    {openModal ? (
      <div
        onClick={closeModal}
        className={classNames(modalBackdrop, {
          'block opacity-50': openModal,
          'hidden opacity-0': !openModal,
        })}
      ></div>
    ) : (
      ''
    )}
    <div
      className={classNames(modal, {
        'translate-y-0 openModal': openModal,
        'translate-y-1/2': !openModal,
      })}
      onClick={closeModal}
    >
      <div
        className={classNames(modalDialog, {
          [width]: width,
          ['max-w-[85%]']: !width,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-white rounded-3xl p-10'>
          <CrossIcon onClick={closeModal} className='cursor-pointer ml-auto' />
          <div className='flex gap-5'>
            <div className='image w-[500px] min-w-[500px]'>
              <img
                src={selectedUser?.image}
                alt='img'
                width='500'
                height='500'
              />
            </div>
            <div className='content p-5'>
              <h2 className='text-gray text-base font-medium relative before:absolute before:border-b-2 before:w-[50px] before:border-burntOrange before:bottom-0'>
                OUR TEAM
              </h2>
              <div className='pt-14'>
                <h3 className='text-black text-4xl font-bold mb-7'>
                  {selectedUser?.title}
                </h3>
                <h5 className='text-gray text-base mb-8'>
                  <span className='w-[13px] h-[13px] bg-burntOrange inline-block mr-[13px]'></span>
                  {selectedUser?.text}
                </h5>
                <p className='text-gray text-base'>
                  {selectedUser?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1>hello</h1>
      </div>
    </div>
  </div>
);
