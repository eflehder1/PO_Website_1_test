import styles from './index.module.css';

export const TimelineCard = ({ data }) => (
  <div className={styles.card}>
    <div className={styles.imageCard}>
      <img src={data?.icon} alt='img' />
    </div>
    <div>
      <h3 className='text-xl text-white font-semibold mb-2'>{data?.title}</h3>
      <p className='text-sm text-white font-medium'>{data?.text}</p>
    </div>
  </div>
);
