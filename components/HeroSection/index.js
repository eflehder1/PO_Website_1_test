import Reveal, { Fade } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

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
              <p className='text-2xl text-white font-semibold mb-4'>
                Harnessing wastewater to
              </p>
            </Fade>
            <Fade direction='up'>
              <h1 className='text-6xl font-bold text-white -ml-0.5'>
              Power clean Industry
              </h1>
            </Fade>
          </div>
          <Fade direction='up'>
            <p className='text-2xl text-white mt-5 mb-5'>
            Pipeline Organics is pioneering next generation enzymatic biofuel cell 
            technology to generate clean, renewable electricity from industrial waste streams.
            </p>
          </Fade>
          <Fade direction='up'>
            <Link href='/tech'>
              <Button className='text-2xl'>Discover →</Button>
            </Link>
          </Fade>
          <div className='poweredSection mt-5'>
            <p className='text-2xl text-white font-semibold mb-5'>
              Our supporters
            </p>

            <div className='grid grid-cols-3 gap-2 items-center'>
              <Fade direction='left' triggerOnce={true} cascade>
                <img
                  src='/images/logo1.png'
                  alt='logo'
                  className='w-[250%]'
                />
                <img
                  src='/images/logo2.png'
                  alt='logo'
                  className='w-[250%]'
                />
                <img
                  src='/images/conception.png'
                  alt='logo'
                  className='w-[250%]'
                />
                <img
                  src='/images/innovate.png'
                  alt='logo'
                  className='w-[250%]'
                />
                <img
                  src='/images/techround.png'
                  alt='logo'
                  className='w-[250%] mix-blend-darken'
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
              className='w-full h-full object-cover object-center mix-blend-darken mr-[80] md:mr-0'
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
