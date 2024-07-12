import { Container, Layout } from '@/components';
import StarField from '@/components/StarField';

export default function Tech() {
    return (
      <Layout>
        <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'black' }}>
          <StarField />
          <Container>
            <div style={{ marginTop: '86px' }} className='relative'>
              <div className='sectionHeader max-w-[788px] mx-auto text-center flex flex-col justify-center items-center py-12'>
                <h2 className='font-bold text-secondary text-4xl'>Power Generation with TankArc<sup>&trade;</sup></h2>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    );
}
