import { Fade } from 'react-awesome-reveal';

export const Left = ({ data, border }) => (
  <div className='flex items-center'>
    <div className='flex flex-col items-end w-1/2 pr-8'>
      <Fade direction='bottom' delay='5'>
        <p className='text-base text-white font-medium'>{data?.text}</p>
      </Fade>
    </div>
    <div className='bg-[#3B4663] rounded-full w-[85px] h-[85px] min-w-[85px] flex items-center justify-center relative z-50 before:absolute before:w-10 before:h-[1px] before:-right-10 before:bg-[#46A8C2] after:absolute after:-right-10 after:w-1 after:h-1 after:bg-[#46A8C2] after:rounded-full'>
      <img
        src={data?.icon}
        alt='icon'
        className='rounded-full w-14 h-14 object-cover'
      />
    </div>
    {border && (
      <div className='border-l border-[#46A8C2] top-0 h-full absolute left-[calc(50%-1px)]' />
    )}
    <div className='flex flex-col items-start pl-24 w-1/2'>
      <Fade direction='bottom' delay='7'>
        <h3 className='font-bold text-2xl mb-1 text-white'>{data?.year}</h3>
        <p className='text-base font0medium text-white'>{data?.company}</p>
      </Fade>
    </div>
  </div>
);
