import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

import { Layout, LeftSection, RightSection } from '@/components';
import { CheckIcon } from '@/components/icons';
import { TECHSECTION_CONTENT } from '@/config/constants';
import { EmailSection } from '@/components/Footer/EmailSection';

const customAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 100px, 0);
    
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }`;

export default function Tech() {
  return (
    <Layout>
      <div className='mt-[86px]'>
        <div className='relative'>
          <div className='videoSection mb-20'>
            <video autoPlay loop controls className='w-full'>
              <source src='/video/tech-video.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
      <Reveal
        keyframes={customAnimation}
        delay={0.5}
        duration={1500}
        cascade
        direction='up'
      >
        {TECHSECTION_CONTENT?.map((data, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <RightSection
                data={data}
                list={
                  <>
                    <h5 className='text-secondary font-bold text-sm mb-5'>
                      {data?.listTitle}
                    </h5>
                    <ul>
                      {data?.list?.map((list, index) => (
                        <li
                          className='flex items-start gap-3 text-sm font-medium mb-3 text-secondary'
                          key={index}
                        >
                          <CheckIcon className='min-w-5' />
                          {list}
                        </li>
                      ))}
                    </ul>
                  </>
                }
              />
            ) : (
              <LeftSection
                data={data}
                list={
                  <>
                    <h5 className='text-secondary font-bold text-sm mb-5'>
                      {data?.listTitle}
                    </h5>
                    <ul>
                      {data?.list?.map((list, index) => (
                        <li
                          className='flex items-center gap-3 text-sm font-medium mb-3 text-secondary'
                          key={index}
                        >
                          <CheckIcon className='min-w-5' />
                          {list}
                        </li>
                      ))}
                    </ul>
                  </>
                }
              />
            )}
          </div>
        ))}
      </Reveal>
      <EmailSection />
    </Layout>
  );
}
