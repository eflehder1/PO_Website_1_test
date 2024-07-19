import { useState } from 'react';
import Image from 'next/image';

import { Container, Layout, TeamDetailModal, Timeline } from '@/components';
import { Card } from '@/components/Card';
import { CONTENT } from '@/config/constants';

export default function Company() {
  const [showModal, setShowModal] = useState();
  const [selectedUser, setSelectedUser] = useState('');

  const handleShowTeamModal = () => {
    setShowModal(true);
  };

  const handleCloseTeamModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <div className='mt-[82px]'>
        <div className=''>
          <Image
            width={1400}
            height={1000}
            src='/images/Team_crop.jpg'
            alt='aboutimg'
            className='w-full'
          />
        </div>
      </div>
      {/* <div className='relative w-full md:h-[895px] pt-[200px] bg-[url(/images/BG.png)] bg-no-repeat bg-cover'>
        <div className='flex flex-col justify-between items-center h-full'>
          <div className='max-w-[60rem] flex p-[20px] md:p-0 flex-col items-center justify-center text-center'>
            <div className='space-y-2'>
              <h1 className=' text-5xl md:text-6xl leading-[80px] font-bold text-white'>
                Our Story
              </h1>
            </div>

            <p className='text-gray-700 text-base text-white mt-5 mb-[26px]'>
              Pipeline Organics is developing higher efficiency enzymatic
              biofuel cells to generate clean, continuous renewable electricity
              from wastewater, aiding energy-intensive industries meet net-zero
              targets.
            </p>

            <Button variant='primary'>Explore now →</Button>
          </div>
          <div className='pt-20 relative z-10'>
            <Image
              alt='Innovative material'
              className='w-full h-full object-cover object-center'
             width={1020}
                  height={720}
              src='/images/FoundersPicture .png'
            />
          </div>
        </div>
        <div className='wave absolute -bottom-[1px] w-full'>
          <Image src='/images/wave.svg' alt='wave' width={1020} height={720} className='w-full' />
        </div>
      </div> */}
      {/* <div className='poweredSection flex flex-col justify-center items-center pt-16 md:pt-80'>
        <p className='text-gray font-semibold mb-5'>Powering clean industry</p>

        <div className='grid grid-cols-2 sm:flex gap-6 items-center'>
          <Fade direction='left' triggerOnce={true} cascade>
            <Image
              src='/images/CocaCola-white.png'
              alt='logo'
              width={1020}
              height={720}
              className='w-[121px] h-[38px]'
            />
            <Image
              src='/images/White-water.png'
              alt='logo'
              width={1020}
              height={720}
              className='w-[100px] h-[30px]'
            />
            <Image
              src='/images/logo3.png'
              alt='logo'
              width={1020}
              height={720}
              className='w-[100px] h-[30px]'
            />

            <Image
              src='/images/logo4.png'
              alt='logo'
              width={1020}
              height={720}
              className='w-[100px] h-[30px]'
            />

            <Image
              src='/images/logo5.png'
              alt='logo'
              width={1020}
              height={720}
              className='w-[100px] h-[30px] mix-blend-darken'
            />
          </Fade>
        </div>
      </div> */}
      {/* <div className='missionSection pt-28'>
        <Container>
          <div className='flex gap-5 items-center max-md:flex-col max-md:gap-0'>
            <div className='flex md:w-[45%] pr-5'>
              <div className='content'>
                <h3 className='text-3xl sm:text-4xl font-bold mb-5 text-secondary'>
                  Our Mission
                </h3>
                <p className='text-lg leading-[24px] text-gray font-medium'>
                  To provide clean, reliable electricity to energy-intensive
                  industries while making a positive impact on the environment
                  and society.
                </p>
              </div>
            </div>
            <div className='flex md:w-[55%]'>
              <Reveal
                direction='bottom'
                keyframes={customAnimation}
                delay={0.5}
                duration={1500}
              >
                <div className='image'>
                  <Image
                    src='/images/TechLatt.jpg'
                    alt='img'
                    width={1020}
                    height={720}
                    className='mx-auto md:ml-auto md:mr-0 w-[90%]'
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </div> */}
      <div className='meetteamSection'>
        <Container>
          <div className='max-w-[610px] m-auto flex flex-col pt-[60px] pb-[40px] items-center justify-center text-center'>
            <h2 className='text-4xl font-bold text-secondary'>Meet the team</h2>
            <p className='text-s text-gray-700 text-base text-gray mt-5 mb-[26px]'>
            We're not your average cleantech team. We're a band of specialists united by a mission: to disrupt the energy landscape with ground-breaking fuel cells that generate renewable electricity from wastewater.
            Our team blends skills across various disciplines: tech-transfer wizards, biochemistry rockstars, computational design ninjas, simulation superheroes, and manufacturing and commercialisation masterminds.
            </p>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-[26px]'>
            {CONTENT.map((data) => (
              <Card
                key={data.id}
                data={data}
                onClick={handleShowTeamModal}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            ))}
          </div>
        </Container>
      </div>
      {/* <div>
        <Container>
          <div className='max-w-[46rem] m-auto flex flex-col pt-16 md:pt-[200px] pb-5 md:pb-[40px] items-center justify-center text-center'>
            <h2 className=' text-4xl font-bold text-secondary '>
              Our Story & Mission
            </h2>

            <p className='text-gray-700 text-base text-gray mt-5 mb-[26px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-3 pb-3'>
            <div className='w-full md:w-[65%]'>
              <StoryCard
                color='#E6966F'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
            <div className='w-full md:w-[40%]'>
              <StoryCard
                color='#46A8C2'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3 pb-3'>
            <div className='w-full md:w-[40%]'>
              <StoryCard
                color='#2E4169'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
            <div className='w-full md:w-[65%]'>
              <StoryCard
                color='#9747FF'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className='flex flex-col md:flex-row gap-3 pt-16 md:pt-28'>
            {BLOGCONTENT.map((data) => (
              <BlogCard key={data.id} data={data} />
            ))}
          </div>
        </Container>
      </div> */}
      <div className='py-20'>
        <Container>
          {/* <ProgressTimeline /> */}
          <Timeline />
        </Container>
      </div>
      {/* <div className='pt-14 pb-28'>
        <Container>
          <NewsletterSection />
        </Container>
      </div> */}
      {showModal && (
        <TeamDetailModal
          openModal={showModal}
          closeModal={handleCloseTeamModal}
          selectedUser={selectedUser}
        />
      )}
    </Layout>
  );
}
