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
  <footer className='py-20 bg-white'>
    <Container>
      <EmailSection />
      <div className='bottomSection pt-20'>
        <div className='flex justify-between items-center'>
          <div className='relative flex flex-col gap-2 md:flex-row items-center'>
            <div className='image'>
              <LogoIcon />
            </div>
            <div className='relative pl-20'>
              <div className='links flex items-center gap-8 mb-3'>
                {FOOTER_LINKS?.map((data) => (
                  <Link
                    href={data?.url}
                    key={data?.id}
                    className='text-base text-secondary font-semibold'
                  >
                    {data?.text}
                  </Link>
                ))}
              </div>
              <p className='text-sm text-gray font-medium'>
                © 2024 Pipeline Organics, All rights reserved.
              </p>
            </div>
          </div>
          <div className='socailIcons'>
            <LinkedinIcon />
          </div>
        </div>
        <div className='flex justify-between items-center mt-7'>
          <p className='text-sm font-medium text-gray w-[65%]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <div className='links flex gap-3'>
            <Link href='/privacy-poilcy' className='text-sm text-secondary'>
              Privacy Policy
            </Link>
            <span className='text-sm text-gray'>|</span>
            <Link href='/terms' className='text-sm text-secondary'>
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
