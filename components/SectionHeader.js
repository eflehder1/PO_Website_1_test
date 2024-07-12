import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

const headingAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
    
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const textAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
    
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const SectionHeader = ({ heading, text }) => (
  <div className='sectionHeader max-w-xl mx-auto text-center'>
    <Reveal direction='bottom' duration={1000} keyframes={headingAnimation}>
      <h3 className='text-3xl sm:text-4xl font-bold text-secondary mb-5'>
        {heading}
      </h3>
    </Reveal>
    <Reveal direction='bottom' keyframes={textAnimation} delay={10}>
      <p className='text-gray text-base mb-4'>{text}</p>
    </Reveal>
  </div>
);
