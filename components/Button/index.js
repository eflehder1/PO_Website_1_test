import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import styles from './index.module.css';

const button =
  'font-alata whitespace-nowrap text-center text-sm leading-[120%] font-semibold border border-transparent cursor-pointer relative md:py-[20px] py-[14px] md:px-[32px] px-[22px] rounded-lg transition-all delay-[0.1ms] ease-in-out focus:outline-none hover:opacity-85 flex items-center justify-center gap-2';

export const Button = ({
  type = 'button',
  variant = 'primary',
  loading,
  onClick,
  className = '',
  children,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={twMerge(
      classNames(button, {
        [className]: Boolean(className),
        [styles[variant]]: variant,
      }),
    )}
    disabled={loading}
  >
    {loading ? 'Loading' : children}
  </button>
);
