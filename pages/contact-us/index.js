import { Accordion } from './Accordion';

import { Button, Container, Layout } from '@/components';

export default function ContactUs() {
  return (
    <Layout>
      <div className='mt-[86px]'>
        <div className=''>
          <img src='/images/about.webp' alt='aboutimg' className='w-full' />
        </div>
      </div>
      <div className='formSection pb-20'>
        <Container>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='relative pt-10 md:w-[90%]'>
              <Accordion />
            </div>
            <div>
              <div className='bg-white rounded-[20px] flex flex-col w-full mt-10 relative z-10 shadow-[0_0_10px_#00000014]'>
                <div className='bg-[#F7F7F8] p-8'>
                  <p className='leading-relaxed text-sm font-medium text-gray'>
                    We would be happy to hear from you about any feedback or
                    questions about Pipeline organics and how it works.
                  </p>
                </div>
                <form className='p-7'>
                  <div className='flex gap-3'>
                    <div className='relative mb-4 w-full'>
                      <label
                        for='name'
                        className='leading-7 text-sm text-[#29292B] font-semibold mb-[10px] inline-block'
                      >
                        Full name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Full name'
                        className='w-full bg-white text-[#4B4B4B] placeholder:text-[#4B4B4B] text-sm border border-[#E7E9ED] h-[56px] rounded-lg py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                      />
                    </div>

                    <div className='relative mb-4 w-full'>
                      <label
                        for='name'
                        className='leading-7 text-sm text-[#29292B] font-semibold mb-[10px] inline-block'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        className='w-full bg-white text-[#4B4B4B] placeholder:text-[#4B4B4B] text-sm border border-[#E7E9ED] h-[56px] rounded-lg py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                      />
                    </div>
                  </div>
                  <div className='relative mb-4 w-full'>
                    <label
                      for='name'
                      className='leading-7 text-sm text-[#29292B] font-semibold mb-[10px] inline-block'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      placeholder='Subject'
                      className='w-full bg-white text-[#4B4B4B] placeholder:text-[#4B4B4B] text-sm border border-[#E7E9ED] h-[56px] rounded-lg py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <label
                      for='message'
                      className='leading-7 text-sm text-[#29292B] font-semibold mb-[10px] inline-block'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-white text-[#4B4B4B] placeholder:text-[#4B4B4B] text-sm border border-[#E7E9ED] h-32 rounded-lg py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>

                  <Button className='w-full capitalize'>
                    Submit &nbsp;&nbsp;&nbsp;→
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
