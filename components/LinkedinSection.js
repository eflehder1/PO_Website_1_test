import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const LinkedinPosts = [
  'https://www.linkedin.com/embed/feed/update/urn:li:activity:7214215832539643906',
  'https://www.linkedin.com/embed/feed/update/urn:li:activity:7210923507935793152',
  'https://www.linkedin.com/embed/feed/update/urn:li:activity:7204029252726341633',
  'https://www.linkedin.com/embed/feed/update/urn:li:activity:7199014753162133504',
];

const iframeContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '250px',
  overflow: 'hidden',
  borderRadius: '10px',
  border: '1px solid #E7E9ED',
};

const iframeStyle = {
  width: 'calc(100% + 17px)', // Adjust to account for scrollbar width
  height: '100%',
  border: 'none',
};

export const LinkedinSection = () => {
  useEffect(() => {
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    const handleMouseEnterNext = () => {
      document.querySelector('.swiper-button-next').click();
    };

    const handleMouseEnterPrev = () => {
      document.querySelector('.swiper-button-prev').click();
    };

    if (nextButton) {
      nextButton.addEventListener('mouseenter', handleMouseEnterNext);
    }

    if (prevButton) {
      prevButton.addEventListener('mouseenter', handleMouseEnterPrev);
    }

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('mouseenter', handleMouseEnterNext);
      }

      if (prevButton) {
        prevButton.removeEventListener('mouseenter', handleMouseEnterPrev);
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          bottom: 10px;
        }
        .swiper-button-next {
          right: -100px;
        }
        .swiper-button-prev {
          left: 0px;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          color: gray;
        }
      `}</style>
      <section className='linkedinSection bg-primary pt-56 pb-32 3xl:pt-60 overflow-hidden relative'>
        <div className='wave absolute top-0 w-full'>
          <Image
            src='/images/wave2.svg'
            alt='wave'
            width={1020}
            height={155}
            className='w-full'
          />
        </div>
        <div className='flex flex-col md:flex-row px-6 sm:px-[45px] tab:px-[140px] 3xl:pl-0 3xl:max-w-[1300px] mx-auto gap-5 items-center'>
          <div className='content md:w-[30%]'>
            <h3 className='text-4xl font-bold text-white mb-5'>
              LinkedIn Feed
            </h3>
            <p className='text-base text-white'>
              Follow Us: Stay up to date with our progress and be the first to
              hear about exciting developments on our first commercial product
            </p>
          </div>
          <div className='silder w-full md:w-[70%]'>
            <div className='swiperSlider w-full'>
              <Swiper
                spaceBetween={25}
                slidesPerView={1.3}
                navigation
                modules={[Navigation]}
                breakpoints={{
                  600: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1080: {
                    slidesPerView: 3,
                  },
                }}
              >
                {LinkedinPosts?.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div style={iframeContainerStyle}>
                      <iframe src={data} style={iframeStyle}></iframe>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
