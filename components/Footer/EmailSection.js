import Link from 'next/link';

import { Button } from '../Button';

export const EmailSection = () => (
  <div className='emailSection py-12 md:py-[83px]'>
    <div className='md:text-left sm:w-1/2 mx-auto text-center flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold text-black mb-4'>Stay Updated here!</h2>
      <p className='text-sm font-medium text-gray mb-5'>
        We’ll never share your details with third parties. View
        <br /> our Privacy Policy for more info.
      </p>
      <Link href='/contact-us'>
        <Button>Contact us</Button>
      </Link>
    </div>
  </div>
);
