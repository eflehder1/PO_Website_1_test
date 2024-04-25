export const Card = ({ data }) => (
  <div className='flex flex-col items-center gap-6 '>
    <div className='bg-white rounded-xl shadow-grayShadow'>
      <img src={data?.image} className='w-full h-full' />
    </div>
    <div className='flex flex-col items-center gap-2'>
      <h2 className='text-black text-xl font-semibold'>{data?.title}</h2>
      <p className='text-gray text-sm font-medium'>{data?.text}</p>
      <div className='border border-[#EAEAEA] w-7 h-7 rounded-full p-2'>
        <img src={data?.logo} />
      </div>
    </div>
  </div>
);
