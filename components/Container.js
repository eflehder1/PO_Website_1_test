export const Container = ({ children, className, ...rest }) => (
  <div
    className={`mx-auto px-6 sm:px-[45px] md:px-[90px] tab:px-[158px] 3xl:max-w-[1300px] ${className || ''}`}
    {...rest}
  >
    {children}
  </div>
);
