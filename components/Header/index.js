import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

import { HamburgerIcon, LogoIcon } from '../icons';
import { Button } from '../Button';

import { Sidebar } from './Sidebar';

const NAV_LINKS = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'Company',
    url: '/#',
  },
  {
    id: 3,
    text: 'Tech',
    url: '/##',
  },
];

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <header
        className='text-gray-600 body-font fixed top-0 z-50 w-full bg-[#ffffffcc]'
        style={{ backdropFilter: 'blur(40px)' }}
      >
        <div className='mx-auto 3xl:max-w-[1440px] flex flex-wrap py-3.5 px-6 md:px-16 tab:px-[124px] flex-row items-center justify-between'>
          <Link href='/'>
            <LogoIcon />
          </Link>
          <nav className='ml-auto hidden sm:flex gap-9 flex-wrap items-center text-base justify-center'>
            {NAV_LINKS?.map((data) => (
              <Link
                key={data?.id}
                href={data?.url}
                className='text-secondary text-sm font-medium'
              >
                {data?.text}
              </Link>
            ))}
          </nav>
          <Button className='ml-8 hidden sm:block'>Contact us</Button>
          <HamburgerIcon
            className='sm:hidden cursor-pointer'
            onClick={handleShowSidebar}
          />
        </div>
      </header>
      <Sidebar
        className={classNames({ 'translate-y-0': showSidebar })}
        onClose={handleShowSidebar}
      />
    </>
  );
};
