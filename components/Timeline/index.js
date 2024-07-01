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
  <div className="flex justify-center text-white p-8 lg:p-28 rounded-xl bg-[linear-gradient(162deg,rgba(109,163,173,0.8)26%,rgba(230,150,111,0.8)79%)]">
    <div className={styles.wrapper}>
      <div className={styles.logoTop}></div>
      <div className={styles.dotTop}></div>
      {TIMELINE_CONTENT?.map((data) => (
        <div className={styles.list} key={data?.id}>
          <h3 className="w-full text-center pt-5 text-2xl font-bold mb-5">{data?.year}</h3>
          {/* <div className={styles.card}>
            <div className="left-section">
              <img src={data?.timage} alt="img" />
            </div>
          </div> */}
          {data?.achievements?.map((achievement) => (
            <Reveal
              triggerOnce
              keyframes={customAnimation}
              direction="left"
              duration={1000}
              cascade
              key={achievement?.id}
            >
              <TimelineCard data={achievement} />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  </div>
);
