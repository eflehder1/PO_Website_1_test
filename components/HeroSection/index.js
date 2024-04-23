import Reveal, { Fade } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { Button } from '../Button';
import { Container } from '../Container';

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

export const HeroSection = () => (
  <>
    <div className='relative w-full md:h-[895px] pt-[200px] md:pt-0 bg-[url(/images/BG.png)] bg-no-repeat bg-cover'>
      <Container className='flex flex-col md:flex-row justify-between items-center h-full'>
        <div className='max-w-[33rem]'>
          <div className='space-y-2'>
            <Fade direction='up'>
              <p className='text-xl text-white font-medium mb-4'>
                Using wastewater to generate
              </p>
            </Fade>
            <Fade direction='up'>
              <h1 className='text-6xl font-bold text-white'>
                Clean Electricity.
              </h1>
            </Fade>
          </div>
          <Fade direction='up'>
            <p className='text-gray-700 text-base text-white mt-5 mb-[26px]'>
              Pipeline Organics is developing higher efficiency enzymatic
              biofuel cells to generate clean, continuous renewable electricity
              from wastewater, aiding energy-intensive industries meet net-zero
              targets.
            </p>
          </Fade>
          <Fade direction='up'>
            <Button>Explore now →</Button>
          </Fade>
          <div className='poweredSection mt-[60px]'>
            <p className='text-white font-semibold mb-5'>
              Powering clean industry
            </p>
            <div className='flex gap-6 items-center'>
              <Fade direction='left' delay={100} triggerOnce={true}>
                <img
                  src='/images/logo1.png'
                  alt='logo'
                  className='w-[121px] h-[38px]'
                />
              </Fade>
              <Fade direction='left' delay={300} triggerOnce={true}>
                <img
                  src='/images/logo2.png'
                  alt='logo'
                  className='w-[100px] h-[30px]'
                />
              </Fade>
              <Fade direction='left' delay={500} triggerOnce={true}>
                <img
                  src='/images/logo3.png'
                  alt='logo'
                  className='w-[100px] h-[30px]'
                />
              </Fade>
              <Fade direction='left' delay={700} triggerOnce={true}>
                <img
                  src='/images/logo4.png'
                  alt='logo'
                  className='w-[100px] h-[30px]'
                />
              </Fade>
              <Fade direction='left' delay={900} triggerOnce={true}>
                <img
                  src='/images/logo5.png'
                  alt='logo'
                  className='w-[100px] h-[30px] mix-blend-darken'
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className='pt-20'>
          <Reveal
            className='mix-blend-darken'
            keyframes={customAnimation}
            delay={0.5}
            duration={1500}
          >
            <img
              alt='Innovative material'
              className='w-full h-full object-cover object-center mix-blend-darken'
              height='100%'
              src='/images/slide1.png'
              width='100%'
            />
          </Reveal>
        </div>
      </Container>
      <div className='wave absolute -bottom-[1px] w-full'>
        <img src='/images/wave.svg' alt='wave' className='w-full' />
      </div>
    </div>
  </>
);
