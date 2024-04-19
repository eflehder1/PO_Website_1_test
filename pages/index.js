import {
  HeroSection,
  Layout,
  LeftSection,
  LinkedinSection,
  RightSection,
  SustainabilitySection,
} from '@/components';
import { CheckIcon } from '@/components/icons';
import { HOMESECTIONCONENT } from '@/config/constants';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SustainabilitySection />
      {HOMESECTIONCONENT?.map((data, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <LeftSection
              data={data}
              list={
                <>
                  <h5 className='text-secondary font-bold text-sm mb-5'>
                    {data?.listTitle}
                  </h5>
                  <ul>
                    {data?.list?.map((list, index) => (
                      <li
                        className='flex items-center gap-3 text-sm font-medium mb-3 text-secondary'
                        key={index}
                      >
                        <CheckIcon className='min-w-5' />
                        {list}
                      </li>
                    ))}
                  </ul>
                </>
              }
            />
          ) : (
            <RightSection
              data={data}
              list={
                <>
                  <h5 className='text-secondary font-bold text-sm mb-5'>
                    {data?.listTitle}
                  </h5>
                  <ul>
                    {data?.list?.map((list, index) => (
                      <li
                        className='flex items-start gap-3 text-sm font-medium mb-3 text-secondary'
                        key={index}
                      >
                        <CheckIcon className='min-w-5' />
                        {list}
                      </li>
                    ))}
                  </ul>
                </>
              }
            />
          )}
        </div>
      ))}
      <LinkedinSection />
    </Layout>
  );
}
