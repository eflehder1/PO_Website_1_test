import Link from 'next/link';
import classNames from 'classnames';

import { CrossIcon, LogoIcon } from '../icons';

const NAV_LINKS = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'Contact us',
    url: '/##',
  },
  {
    id: 3,
    text: 'Company',
    url: '/#',
  },
  {
    id: 4,
    text: 'Tech',
    url: '/##',
  },
];

export const Sidebar = ({ onClose, className, ...rest }) => (
  <div
    className={classNames(
      'fixed h-full w-full transition-all delay-[0.2s] duration-500 ease-in-out -translate-y-full bg-white z-50',
      className,
    )}
    {...rest}
  >
    <div className='flex flex-col justify-between pb-5 h-full'>
      <div className='pt-5 pr-5'>
        <div className='flex justify-between pl-5'>
          <LogoIcon />
          <CrossIcon onClick={onClose} className='cursor-pointer ml-auto' />
        </div>
        <div className='links pt-16 pl-10'>
          <nav className='flex flex-col gap-4'>
            {NAV_LINKS?.map((data) => (
              <Link
                key={data?.id}
                href={data?.url}
                className='text-secondary text-base font-semibold'
              >
                {data?.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <nav className='flex flex-col gap-4 pt-4 pl-10'>
        <Link
          href='/privacy-policy'
          className='text-secondary text-base font-semibold'
        >
          Privacy Policy
        </Link>
        <Link
          href='/privacy-policy'
          className='text-secondary text-base font-semibold'
        >
          Terms & Conditions
        </Link>
      </nav>
    </div>
  </div>
);
