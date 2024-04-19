import Link from 'next/link';

import { CrossIcon } from '../icons';

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

export const Sidebar = ({ onClose, ...rest }) => (
  <div className='fixed h-full w-full bg-white z-50' {...rest}>
    <div className='pt-5 pr-5'>
      <CrossIcon onClick={onClose} className='cursor-pointer ml-auto' />
      <div className='links pt-16 pl-10'>
        <nav className='flex flex-col gap-8'>
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
  </div>
);
