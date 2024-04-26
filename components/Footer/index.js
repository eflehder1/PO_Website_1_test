import Link from 'next/link';

import { LinkedinIcon, LogoIcon } from '../icons';
import { Container } from '../Container';

import { EmailSection } from './EmailSection';

const FOOTER_LINKS = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/#',
    text: 'Contact us',
  },
  {
    id: 3,
    url: '/##',
    text: 'Timeline',
  },
  {
    id: 4,
    url: '/###',
    text: 'Team',
  },
  {
    id: 5,
    url: '/####',
    text: 'Dashboard',
  },
];

export const Footer = () => (
  <footer className=' bg-white border-t border-[#E7E9ED]'>
    <Container>
      <EmailSection />
      <div className='bottomSection pt-12 pb-12 md:pt-20'>
        <div className='flex flex-col gap-7 md:gap-[10px] text-center md:text-left md:flex-row justify-center md:justify-between items-center'>
          <div className='relative flex flex-col gap-6 md:gap-2 md:flex-row items-center'>
            <div className='image'>
              <LogoIcon />
            </div>
            <div className='relative md:pl-20'>
              <div className='links flex items-center gap-3 flex-wrap xs:flex-nowrap sm:gap-5 md:gap-8'>
                {FOOTER_LINKS?.map((data) => (
                  <Link
                    href={data?.url}
                    key={data?.id}
                    className=' text-base whitespace-nowrap xs:text-base text-black font-semibold'
                  >
                    {data?.text}
                  </Link>
                ))}
              </div>
              {/* <p className='text-sm text-gray font-medium'>
                © 2024 Pipeline Organics, All rights reserved.
              </p> */}
            </div>
          </div>
          <div className='socailIcons'>
            <LinkedinIcon />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-7 md:gap-[10px] text-center md:text-left justify-between items-center mt-7'>
          <p className='text-xs font-medium text-gray'>
            © 2024 Pipeline Organics, All rights reserved.
          </p>
          <div className='links flex gap-3'>
            <Link
              href='/privacy-poilcy'
              className='text-xs font-normal text-secondary'
            >
              Privacy Policy
            </Link>
            <span className='text-sm text-gray'>|</span>
            <Link href='/terms' className='text-xs font-normal text-secondary'>
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
