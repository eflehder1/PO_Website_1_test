import { useState } from 'react';

import { CONTACTUS_CONTENT } from '@/config/constants';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full'>
      {CONTACTUS_CONTENT.map((item, index) => (
        <div key={index} className='mb-2'>
          <div
            className='flex justify-between items-center p-4 bg-gray-200 cursor-pointer'
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-base font-semibold text-black'>
              {item.title}
            </span>
            <span className='text-2xl font-semibold text-black'>
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div className='pt-4 bg-white border-t-2 border-[#eeeeee]'>
              <div className='p-2'>
                <img
                  src={item?.img}
                  className='h-[137px] w-full object-cover mb-4'
                  alt='img'
                />
                {item?.content?.map((content, index) => (
                  <div key={index}>
                    <h3 className='mb-1  mt-6 text-black font-semibold text-base'>
                      {content?.contentTitle}
                    </h3>
                    {content?.contentDescription && (
                      <p className='text-black'>{content.contentDescription}</p>
                    )}
                    {content?.list ? (
                      <ul className={'list-disc mt-3 pl-4 text-black'}>
                        {content?.list?.map((data) => (
                          <li className={'mb-3'} key={data?.id}>
                            {data?.title && (
                              <h6 className='text-sm font-semibold text-black'>
                                {data?.title}
                              </h6>
                            )}
                            {data?.text && (
                              <p className='text-sm text-black'>{data?.text}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
                {item?.conclusion && (
                  <p className='text-sm text-black'>{item?.conclusion}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
