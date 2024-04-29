import Link from 'next/link';

import { LinkedinIcon } from '../icons';
import { Button } from '../Button';

export const Card = ({ data, onClick, setSelectedUser }) => (
  <div className='w-full cursor-pointer sm:flex'>
    <div className='bg-white rounded-xl shadow-grayShadow mb-[30px] min-w-[300px] max-w-full'>
      <img src={data?.image} className='w-full h-full' alt='img' />
    </div>
    <div className='flex flex-col items-start gap-2 sm:pl-10'>
      <h2 className='text-black text-xl font-semibold'>{data?.title}</h2>
      <p className='text-gray text-sm font-medium mb-7'>{data?.text}</p>
      <p className='line-clamp-4 text-gray text-sm font-medium mb-4'>
        {data?.description}
      </p>
      <Button
        variant='secondary'
        className='mb-4'
        onClick={() => {
          onClick();
          setSelectedUser(data);
        }}
      >
        Read more
      </Button>
      <Link href='#'>
        <LinkedinIcon className='text-[#0076B2]' />
      </Link>
    </div>
  </div>
);
