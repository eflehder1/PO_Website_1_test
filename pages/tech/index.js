import { Container, Layout } from '@/components';

export default function Tech() {
  const videoStyle = {
    width: '100%', // Full width
    height: '100%', // Full height within its container
    position: 'absolute', // Position absolutely within relative parent
    top: 0,
    left: 0,
    border: 'none', // No border for iframe
  };

  return (
    <Layout>
      <div style={{ marginTop: '86px' }}>
        <div className='relative'>
          <div className='videoSection' style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            {/* <iframe 
              style={videoStyle}
              src="https://www.youtube.com/embed/XFSzF5oKMOE?rel=0&controls=0&showinfo=0&autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <video autoPlay loop controls className='w-full'>
              <source src='/video/tech-video2.mp4' type='video/mp4' />
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
