import { Left } from './Left';
import { Right } from './Right';

import { TIMELINE_CONTENT } from '@/config/constants';

export const ProgressTimeline = () => (
  <div className='text-white p-28 rounded-[40px] bg-[linear-gradient(197deg,rgba(49,60,89,1)0%,rgba(22,28,45,1)100%)]'>
    <div className='sectionHeader pb-24'>
      <h3 className='text-4xl font-bold mb-4'>Programs</h3>
      <p className='text-base font-medium'>
        Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem
        Ipsum is simply dummy text of the printing.
        <br /> Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
    </div>
    <div className='flex flex-col items-center space-y-20 relative'>
      {TIMELINE_CONTENT?.map((data, index) => (
        <>
          {index === 0 ? (
            <Left key={data?.id} data={data} border />
          ) : index % 2 === 0 ? (
            <Left key={data?.id} data={data} />
          ) : (
            <Right key={data?.id} data={data} />
          )}
        </>
      ))}
    </div>
  </div>
);
