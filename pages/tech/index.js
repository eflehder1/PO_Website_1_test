import {  Container, Layout } from '@/components';

export default function Tech() {


  return (
    <Layout>
      <div className='mt-[86px]'>
        <div className='relative'>
         <Container>
            <div className='sectionHeader max-w-[788px] mx-auto text-center flex flex-col justify-center items-center py-12'>
                <h2 className='font-bold text-secondary text-4xl'>Power Generation with TankArc<sup>&trade;</sup></h2>
                
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
 