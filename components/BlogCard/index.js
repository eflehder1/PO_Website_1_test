export const BlogCard = ({ data }) => (
  <div
    className='p-8 rounded-xl h-[410px] flex flex-col gap-4 justify-end'
    style={{ backgroundColor: data.color }}
  >
    <h4 className='text-base font-bold text-black'>{data?.title}</h4>
    <p className='text-sm font-medium text-primary'>{data?.text}</p>
  </div>
);
