import { useRef } from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { Container, Layout } from '@/components';
import { LeftSection, RightSection } from '@/components';
import { CheckIcon } from '@/components/icons';
import { TECHSECTION_CONTENT } from '@/config/constants';

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
  // const videoStyle = {
  //   width: '100%', // Full width
  //   height: '100%', // Full height within its container
  //   position: 'absolute', // Position absolutely within relative parent
  //   top: 0,
  //   left: 0,
  //   border: 'none', // No border for iframe
  // };

  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    
    const video = videoRef.current;
    
    if (video) {
      video.volume = 0.1; // Set the volume to 50%
    }
  };

  const handleTimeUpdate = () => {
   
    const video = videoRef.current;
    
    if (video && video.currentTime >= video.duration * 0.87) {
      video.pause();
    }
  };

  return (
    <Layout>
      <div style={{ marginTop: '86px' }}>
        <div className='relative'>
          <div className='videoSection' style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            {/* <iframe 
              style={videoStyle}
              src="https://www.youtube.com/embed/XFSzF5oKMOE?rel=0&controls=0&showinfo=0&autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <video
              ref={videoRef}
              autoPlay
              controls
              muted
              className='w-full'
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
            >
              <source src='/video/tech-video2.mp4' type='video/mp4' />
            </video>
          </div>
          <Container>
            <div className='sectionHeader max-w-[788px] mx-auto text-center flex flex-col justify-center items-center py-12'>
              {/* <h2 className='font-bold text-secondary text-4xl'>Power Generation with TankArc<sup>&trade;</sup></h2> */}
            </div>
          </Container>
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
    </Layout>
  );
}
