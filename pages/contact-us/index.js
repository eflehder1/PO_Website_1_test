import { useForm } from 'react-hook-form';
import axios from 'axios';

import Accordion from './Accordion';

import { Button, Container, Input, Layout } from '@/components';

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContactUsForm = async (values) => {
    try {
      const response = await axios.post(
        'https://pipelineorganics.co.uk/api/send-email',
        values,
      );
      // eslint-disable-next-line no-console
      console.log(response);
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message,
      );
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
              <div className='bg-white rounded-[20px] flex flex-col w-full mt-10 relative z-10 shadow-[0_0_10px_#00000014]'>
                <div className='bg-[#F7F7F8] p-8'>
                  <p className='leading-relaxed text-sm font-medium text-gray'>
                    We look forward to hearing from you!
                  </p>
                </div>
                <form
                  className='p-7'
                  onSubmit={handleSubmit(handleContactUsForm)}
                >
                  <div className='flex gap-3'>
                    <div className='relative mb-4 w-full'>
                      <Input
                        placeholder='Full name'
                        label='Full name'
                        name='name'
                        register={register}
                        validationRules={{ required: 'Full name is required' }}
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
                      validationRules={{ required: 'message is required' }}
                      error={errors?.message && errors.message?.message}
                    />
                  </div>

                  <Button type='submit' className='w-full capitalize'>
                    Submit &nbsp;&nbsp;&nbsp;→
                  </Button>
                </form>
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
