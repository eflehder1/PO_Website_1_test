// Accordion.js
import { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Talent',
    contentTitle: 'People first',
    text: 'Building a multi-disciplinary impact-driven team. At Pipeline Organics we put people first and we believe that people perform at their best when their wellbeing is prioritized. ​Currently we don’t have vacancies, but we will be putting our job vacancies here in the future.',
    img: '/images/partener.png',
  },
  {
    id: 2,
    title: 'Talent',
    contentTitle: 'People first',
    text: 'Building a multi-disciplinary impact-driven team. At Pipeline Organics we put people first and we believe that people perform at their best when their wellbeing is prioritized. ​Currently we don’t have vacancies, but we will be putting our job vacancies here in the future.',
    img: '/images/partener.png',
  },
  {
    id: 3,
    title: 'Talent',
    contentTitle: 'People first',
    text: 'Building a multi-disciplinary impact-driven team. At Pipeline Organics we put people first and we believe that people perform at their best when their wellbeing is prioritized. ​Currently we don’t have vacancies, but we will be putting our job vacancies here in the future.',
    img: '/images/partener.png',
  },
  {
    id: 4,
    title: 'Talent',
    contentTitle: 'People first',
    text: 'Building a multi-disciplinary impact-driven team. At Pipeline Organics we put people first and we believe that people perform at their best when their wellbeing is prioritized. ​Currently we don’t have vacancies, but we will be putting our job vacancies here in the future.',
    img: '/images/partener.png',
  },
];

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full'>
      {items.map((item, index) => (
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
            <div className='p-4 bg-white border-t-2 border-[#eeeeee]'>
              <div className='p-2'>
                <img
                  src={item?.img}
                  className='h-[137px] w-full object-cover mb-4'
                  alt='img'
                />
                <h3 className='mb-1 text-black font-semibold text-base'>
                  {item?.contentTitle}
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
