import { Button, Container, Layout } from '@/components';

export default function Tech() {


  return (
    <Layout>
      <div className='mt-[86px]'>
        <div className='relative'>
         <Container>
            <div className='sectionHeader max-w-[788px] mx-auto text-center flex flex-col justify-center items-center py-24'>
                <h2 className='mb-4 font-bold text-secondary text-6xl'>Why our tech is exciting</h2>
                <p className='mb-5 text-base text-gray font-medium'>Environmentally friendly, circular economy, recyclable, 3DP, adaptable (geometrically 
                    and enzymes target different waste type), retrofittable</p>
                    <Button variant='secondary' className='rounded-[50px]'>Explore Now →</Button>
            </div>
            
         </Container>
         <div className='videoSection'>
            <video autoPlay loop controls>
            <source src="/video/tech-video.mp4" type="video/mp4" />
            </video>
            </div>
        </div>
      </div>
     
      

    </Layout>
  );
}
 