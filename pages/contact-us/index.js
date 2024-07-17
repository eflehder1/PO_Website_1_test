import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

import Accordion from './Accordion';

import { Button, Container, Input, Layout } from '@/components';
import { DoneIcon } from '@/components/icons';

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleContactUsForm = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/send-email', values);

      if (response.status === 200) {
        reset();
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className='formSection pb-20 pt-20'>
        <Container>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='relative pt-10 md:w-[90%]'>
              <Accordion />
            </div>
            <div>
              <div className='bg-white min-h-[400px] rounded-[20px] flex flex-col w-full mt-10 relative z-10 shadow-[0_0_10px_#00000014]'>
                {showThankYou ? (
                  <div className='flex bg-[#F7F7F8] p-8 min-h-[400px] items-center justify-center flex-col w-full text-center relative z-10'>
                    <DoneIcon className='w-20 h-20 text-primary mb-5' />
                    <h3 className='text-4xl font-bold mb-5 text-secondary'>
                      Email Sent Succesfully
                    </h3>
                    <p className='leading-relaxed text-sm font-medium text-gray'>
                      Thank you for contacting us! We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className='bg-[#F7F7F8] p-8'>
                      <p className='leading-relaxed text-sm font-medium text-gray'>
                        We look forward to hearing from you!
                      </p>
                    </div>
                    <form
                      className='p-4 xxs:p-7'
                      onSubmit={handleSubmit(handleContactUsForm)}
                    >
                      <div className='xxs:flex gap-3'>
                        <div className='relative mb-4 w-full'>
                          <Input
                            placeholder='Full name'
                            label='Full name'
                            name='name'
                            register={register}
                            validationRules={{
                              required: 'Full name is required',
                            }}
                            error={errors?.name && errors.name?.message}
                          />
                        </div>

                        <div className='relative mb-4 w-full'>
                          <Input
                            type='email'
                            label='Email'
                            placeholder='Email'
                            name='email'
                            register={register}
                            validationRules={{ required: 'Email is required' }}
                            error={errors?.email && errors.email?.message}
                          />
                        </div>
                      </div>
                      <div className='relative mb-4 w-full'>
                        <Input
                          type='text'
                          label='Subject'
                          placeholder='Subject'
                          name='subject'
                          register={register}
                          validationRules={{ required: 'Subject is required' }}
                          error={errors?.subject && errors.subject?.message}
                        />
                      </div>
                      <div className='relative mb-4'>
                        <Input
                          type='textarea'
                          label='Message'
                          placeholder='Message'
                          name='message'
                          register={register}
                          validationRules={{ required: 'Message is required' }}
                          error={errors?.message && errors.message?.message}
                        />
                      </div>

                      <Button
                        loading={loading}
                        type='submit'
                        className='w-full capitalize'
                      >
                        Submit{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 24 24'
                          height='24px'
                          width='24px'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path fill='none' d='M0 0h24v24H0z'></path>
                          <path d='M16.01 11H4v2h12.01v3L20 12l-3.99-4z'></path>
                        </svg>
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className='mt-[86px]'>
        <div className=''>
          <Image src='/images/Team2.jpg' width={1020} height={720} alt='aboutimg' className='w-full' />
        </div>
      </div> */}
    </Layout>
  );
}
