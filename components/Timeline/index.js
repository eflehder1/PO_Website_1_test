import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { TimelineCard } from '../TimelineCard';

import styles from './index.module.css';

import { TIMELINE_CONTENT } from '@/config/constants';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
    
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Timeline = () => (
  <div className='text-white p-8 lg:p-28 rounded-xl bg-[linear-gradient(162deg,rgba(230,150,111,1)26%,rgba(109,163,173,1)79%)]'>
    <div className={styles.wrapper}>
      <div className={styles.headingText}>
        <h2 className='text-white text-4xl font-semibold'>Programs</h2>
      </div>
      {TIMELINE_CONTENT?.map((data, index) => (
        <div className={styles.list} key={data?.id}>
          <h3 className='pl-5 text-2xl font-bold mb-5'>{data?.year}</h3>
          {data?.achievements?.map((achievement) => (
            <Reveal
              triggerOnce
              keyframes={customAnimation}
              direction='left'
              duration={1000}
              cascade
              key={index}
            >
              <TimelineCard data={achievement} key={achievement?.id} />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  </div>
);
