import { Container, Layout } from '@/components';

export default function Tech() {
  const videoStyle = {
    width: '100%', // Full width
    height: 'auto', // Maintain aspect ratio
    outline: 'none', // Remove focus outline
  };

  return (
    <Layout>
      <div style={{ marginTop: '86px' }}>
        <div className='relative'>
          <div className='videoSection' style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <video style={{ ...videoStyle, position: 'absolute', top: 0, left: 0 }} autoPlay muted>
              <source src="/video/tech-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Container>
            <div className='sectionHeader max-w-[788px] mx-auto text-center flex flex-col justify-center items-center py-12'>
              <h2 className='font-bold text-secondary text-4xl'>Power Generation with TankArc<sup>&trade;</sup></h2>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
