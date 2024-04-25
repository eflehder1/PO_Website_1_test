import styles from './index.module.css';

export const TimelineCard = ({ data }) => (
  <div className={styles.card}>
    <div className={styles.imageCard}>
      <img src={data?.url} alt='img' />
    </div>
    <div>
      <h3 className=' text-2xl text-primary font-bold '>{data?.title}</h3>
      <p className=' text-base text-[#5C606C] font-medium '>{data?.text}</p>
    </div>
  </div>
);
