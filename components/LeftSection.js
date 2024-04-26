import classNames from 'classnames';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { Container } from './Container';

const customAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 100px, 0);
    
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const LeftSection = ({ data, list, className }) => (
  <section className={classNames('pb-12 md:pb-24', className)}>
    <Container>
      <div className='flex gap-5 items-center max-md:flex-col max-md:gap-0'>
        <div className='flex md:w-[55%] pr-5'>
          <div className='content'>
            <h3 className='text-3xl sm:text-4xl font-bold mb-5 text-secondary'>
              {data?.title}
            </h3>
            <p className='text-sm leading-[24px] text-gray font-medium mb-6'>
              {data?.text}
            </p>
            {list ? <div>{list}</div> : ''}
          </div>
        </div>
        <div className='flex md:w-[45%]'>
          <Reveal
            direction='bottom'
            keyframes={customAnimation}
            delay={0.5}
            duration={1500}
          >
            <div className='image'>
              <img
                src={data?.url}
                alt='img'
                width='85%'
                className='mx-auto md:ml-auto md:mr-0'
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
