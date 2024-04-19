import { Button } from '../Button';

export const EmailSection = () => (
  <div className='emailSection border-b border-[#D8D8D8] py-20'>
    <div className='flex flex-col sm:flex-row gap-3'>
      <div className='left sm:w-1/2'>
        <h2 className='text-4xl font-bold text-secondary mb-4'>
          Stay updated here!
        </h2>
        <p className='text-sm font-medium text-gray'>
          We’ll never share your details with third parties. View
          <br /> our Privacy Policy for more info.
        </p>
      </div>
      <div className='right sm:w-1/2'>
        <div className='flex gap-3'>
          <input
            className='border border-[#E7E9ED] rounded-[5px] p-3 w-full text-sm text-secondary'
            type='email'
            placeholder='Enter your email'
            required
          />
          <Button>Subscribe</Button>
        </div>
        <p className='text-sm text-gray font-medium mt-1'>
          We’ll never share your details with third parties. View our Privacy
          <br /> Policy for more info. We’ll never share your details with third
          parties.
        </p>
      </div>
    </div>
  </div>
);
