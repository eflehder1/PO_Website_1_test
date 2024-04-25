export const StoryCard = ({ subheading, title, text, color }) => (
  <div className='flex gap-3 '>
    <div className='bg-[#F7F7F8] h-full md:h-[380px] rounded-xl p-7 md:p-11 flex flex-col gap-7'>
      <p className='text-sm font-bold' style={{ color: color }}>
        {subheading}
      </p>
      <h3 className='text-black text-xl font-bold'>{title}</h3>
      <p className='text-base text-primary font-medium'>{text}</p>
    </div>
  </div>
);
