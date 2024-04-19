import { Player } from '@lottiefiles/react-lottie-player';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { SectionHeader } from './SectionHeader';
import { Container } from './Container';

const CONTENT = [
  {
    id: 1,
    title: '627M+',
    text: ' F&B consumes £627m worth of electricity per year in the UK alone (HMG, 2022; Ofgem, 2022).',
    icon: '/images/json/one.json',
  },
  {
    id: 2,
    title: '25-30%',
    text: ' The Food and Beverage (F&B) industry produces 25-30% of world GHG emissions.',
    icon: '/images/json/two.json',
  },
  {
    id: 3,
    title: '50%',
    text: ' The water sector offers a 50% renewable energy gap (Water UK, 2022)',
    icon: '/images/json/three.json',
  },
];

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) translate3d(0, 100px, 0);
    
  }

  to {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
`;

export const SustainabilitySection = () => (
  <section className='py-40'>
    <Container>
      <SectionHeader
        heading='The sustainability challenge'
        text='Industries like food & beverages and water are now pursuing cleaner, renewable electricity solutions to meet global needs.'
      />
      <div className='flex flex-col items-center sm:items-start sm:flex-row justify-between gap-10 pt-20'>
        {CONTENT?.map((data) => (
          <Reveal
            keyframes={customAnimation}
            key={data?.id}
            direction='bottom'
            delay={5}
            duration={800}
            className='xs:w-[314px]'
          >
            <div className='item flex flex-col items-center justify-center text-center gap-3'>
              <div className='w-[110px] h-[110px]'>
                <Player
                  autoplay
                  loop
                  src={data?.icon}
                  style={{ height: '100%', width: '100%' }}
                ></Player>
              </div>
              <h3 className='text-40 leading-11 font-bold text-secondary'>
                {data?.title}
              </h3>
              <p className='text-sm text-gray font-medium'>{data?.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
