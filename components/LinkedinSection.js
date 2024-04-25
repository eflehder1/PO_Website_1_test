import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const LinkedinPosts = [
  'https://www.linkedin.com/embed/feed/update/urn:li:share:7155506248577101825',
  'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7137814353726070784',
  'https://www.linkedin.com/embed/feed/update/urn:li:share:7082261256249712640',
  'https://www.linkedin.com/embed/feed/update/urn:li:share:7115617531272261633',
];

export const LinkedinSection = () => (
  <>
    <section className='linkedinSection bg-primary pt-56 pb-32 3xl:pt-60 overflow-hidden relative'>
      <div className='wave absolute top-0 w-full'>
        <img src='/images/wave2.svg' alt='wave' className='w-full' />
      </div>
      <div className='flex flex-col md:flex-row pl-6 sm:pl-[45px] md:pr-0 tab:px-[140px] 3xl:pl-0 3xl:max-w-[1300px] mx-auto gap-5 items-center'>
        <div className='content md:w-[30%]'>
          <h3 className='text-4xl font-bold text-white mb-5'>Linkedin Feed</h3>
          <p className='text-base text-white'>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className='silder w-full md:w-[70%]'>
          <div className='swiperSlider w-full'>
            <Swiper
              spaceBetween={15}
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
                991: {
                  slidesPerView: 3,
                },
              }}
            >
              {LinkedinPosts?.map((data, index) => (
                <SwiperSlide key={index}>
                  <iframe
                    src={data}
                    width='100%'
                    height='350px'
                    className='rounded-[10px] border border-[#E7E9ED] overflow-hidden'
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </>
);
