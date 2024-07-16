import Reveal, { Fade } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className='relative w-full lg:h-[895px] pt-[150px] pb-20 mb:pb-0 md:pt-[140px] lg:pt-10 bg-[url(/images/BG.png)] bg-no-repeat bg-cover'>
      <Container className='flex flex-col tab:flex-row justify-between items-center h-full'>
        <div className='tab:max-w-[33rem]'>
          <div className='space-y-2'>
            <Fade direction='up'>
              <p className='text-2xl text-white font-semibold mb-4'>
                Harnessing wastewater to
              </p>
            </Fade>
            <Fade direction='up'>
              <h1 className='md:text-6xl text-4xl font-bold text-white -ml-0.5'>
                Power clean Industry
              </h1>
            </Fade>
          </div>
          <Fade direction='up'>
            <p className='text-base md:text-2xl text-white mt-5 mb-5'>
              Pipeline Organics is pioneering next generation biofuel cell
              technology to generate clean, renewable electricity from
              industrial waste streams.
            </p>
          </Fade>
          <Fade direction='up'>
            <Link href='/tech'>
              <Button className='md:text-2xl'>Discover →</Button>
            </Link>
          </Fade>
          <div className='poweredSection mt-5'>
            <p className='text-2xl text-white font-semibold mb-5'>
              Our supporters
            </p>

            <div className='grid grid-cols-3 gap-2 items-center'>
              <Fade direction='left' triggerOnce={true} cascade>
                <Image
                  src='/images/logo1.png'
                  alt='logo'
                  width={300}
                  height={150}
                  className='w-[250%]'
                />
                <Image
                  src='/images/logo2.png'
                  alt='logo'
                  width={300}
                  height={150}
                  className='w-[250%]'
                />
                <Image
                  src='/images/conception.png'
                  alt='logo'
                  width={300}
                  height={150}
                  className='w-[250%]'
                />
                <Image
                  src='/images/innovate.png'
                  alt='logo'
                  width={300}
                  height={150}
                  className='w-[250%]'
                />
                <Image
                  src='/images/techround.png'
                  alt='logo'
                  width={300}
                  height={150}
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
            <Image
              alt='Innovative material'
              className='object-cover object-center mix-blend-darken mr-0 md:mr-80 h-full w-full'
              height={800}
              src='/images/slide1.webp'
              width={1400}
            />
          </Reveal>
        </div>
      </Container>
      <div className='wave absolute -bottom-[1px] w-full'>
        <Image
          src='/images/wave.svg'
          width={1020}
          height={227}
          alt='wave'
          className='w-full'
        />
      </div>
    </div>
  </>
);
