import { Button } from './Button';

export const NewsletterSection = () => (
  <div className='newsletterSection bg-[#46A8C2] rounded-[20px]'>
    <div className='flex'>
      <div className='w-[45%]'>
        <div className='content p-10 pl-[90px] flex flex-col h-full justify-center'>
          <h3 className='text-white text-4xl font-semibold mb-4'>
            Get started with Pipeline
          </h3>
          <p className='text-white text-base font-medium mb-6'>
            We’ll never share your details with third parties. View our Privacy
            Policy for more info.
          </p>
          <div className='border border-white rounded-lg flex gap-2 py-1 pr-1'>
            <input
              type='email'
              placeholder='Enter email'
              className='w-full bg-transparent border-0 focus:outline-0 text-white text-sm font-medium placeholder:text-white px-4'
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className='w-[55%]'>
        <div className='image py-10'>
          <img
            src='/images/letter.png'
            alt='newsletter'
            className='ml-auto relative -right-8'
          />
        </div>
      </div>
    </div>
  </div>
);
