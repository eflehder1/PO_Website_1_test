import { Button } from '../Button';

export const EmailSection = () => (
  <div className='emailSection border-b border-[#D8D8D8] py-12 md:py-[83px]'>
    <div className='md:text-left sm:w-1/2 mx-auto text-center flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold text-black mb-4'>Stay Updated here!</h2>
      <p className='text-sm font-medium text-gray mb-5'>
        We’ll never share your details with third parties. View
        <br /> our Privacy Policy for more info.
      </p>
      <Button>Contact us</Button>
    </div>
  </div>
);
