import { Button } from '../Button';

export const EmailSection = () => (
  <div className='emailSection border-b border-[#D8D8D8] py-12 md:py-[83px]'>
    <div className='flex flex-col sm:flex-row gap-7 md:gap-3'>
      <div className='left text-center md:text-left sm:w-1/2'>
        <h2 className='text-4xl font-bold text-black mb-4'>
          Stay Updated here!
        </h2>
        <p className='text-sm font-medium text-gray'>
          We’ll never share your details with third parties. View
          <br /> our Privacy Policy for more info.
        </p>
      </div>
      <div className='right sm:w-1/2'>
        <div className='flex flex-col justify-center items-center md:flex-row gap-4 md:gap-3'>
          <input
            className='border border-[#E7E9ED] rounded-[5px] p-[19px] font-medium w-full text-sm text-secondary'
            type='email'
            placeholder='Enter your email'
            required
          />
          <Button>Subscribe</Button>
        </div>
        <p className=' text-xs text-center md:text-left text-gray font-medium mt-5 md:mt-1'>
          We’ll never share your details with third parties. View our Privacy
          Policy <br />
          for more info. We’ll never share your details with third parties.
        </p>
      </div>
    </div>
  </div>
);
