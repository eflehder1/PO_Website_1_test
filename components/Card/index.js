export const Card = ({ data, onClick, setSelectedUser }) => (
  <div
    className='w-full cursor-pointer'
    onClick={() => {
      onClick();
      setSelectedUser(data);
    }}
  >
    <div className='bg-white rounded-xl shadow-grayShadow mb-[30px]'>
      <img src={data?.image} className='w-full h-full' />
    </div>
    <div className='flex flex-col items-center gap-2'>
      <h2 className='text-black text-xl font-semibold'>{data?.title}</h2>
      <p className='text-gray text-sm font-medium'>{data?.text}</p>
      <div className='border border-[#EAEAEA] w-8 h-8 rounded-full p-2'>
        <img src={data?.logo} className='w-[15px] h-[14px]' />
      </div>
    </div>
  </div>
);
