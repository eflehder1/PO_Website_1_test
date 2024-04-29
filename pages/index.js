import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

import {
  HeroSection,
  Layout,
  LeftSection,
  LinkedinSection,
  RightSection,
  SustainabilitySection,
} from '@/components';
import { CheckIcon } from '@/components/icons';
import { HOMESECTIONCONENT } from '@/config/constants';

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

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SustainabilitySection />
      <Reveal
        keyframes={customAnimation}
        delay={0.5}
        duration={1500}
        cascade
        direction='up'
      >
        {HOMESECTIONCONENT?.map((data, index) => (
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
      <LinkedinSection />
    </Layout>
  );
}
