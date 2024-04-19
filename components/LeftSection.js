import classNames from 'classnames';

import { Container } from './Container';

export const LeftSection = ({ data, list, className }) => (
  <section className={classNames('pb-24', className)}>
    <Container>
      <div className='flex gap-5 items-center max-md:flex-col max-md:gap-0'>
        <div className='flex md:w-[55%] pr-5'>
          <div className='content'>
            <h3 className='text-4xl font-bold mb-5 text-secondary'>
              {data?.title}
            </h3>
            <p className='text-sm leading-[24px] text-gray font-medium mb-6'>
              {data?.text}
            </p>
            {list ? <div>{list}</div> : ''}
          </div>
        </div>
        <div className='flex md:w-[45%]'>
          <div className='image'>
            <img
              src={data?.url}
              alt='img'
              width='80%'
              className='mx-auto md:ml-auto md:mr-0'
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);
