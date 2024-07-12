import Link from 'next/link';
import Image from 'next/image';

import { LinkedinIcon } from '../icons';
import { Button } from '../Button';

export const Card = ({ data, onClick, setSelectedUser }) => (
  <div className='w-full cursor-pointer sm:flex'>
    <div className='bg-white rounded-xl shadow-grayShadow mb-[30px] sm:min-w-[300px] sm:max-w-[300px]'>
      <Image
        src={data?.image}
        width={400}
        height={500}
        className='mx-auto md:ml-auto md:mr-0 w-full'
        alt='img'
      />
    </div>
    <div className='flex flex-col items-start gap-2 sm:pl-10'>
      <h2 className='text-black text-xl font-semibold'>{data?.title}</h2>
      <p className='text-gray text-sm font-medium mb-4 sm:mb-7'>{data?.text}</p>
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
        Dig Deeper
      </Button>
      <Link href={data?.linkedinUrl} target='_blank' rel='noopener noreferrer'>
        <LinkedinIcon className='text-[#0076B2]' />
      </Link>
    </div>
  </div>
);
