import React from 'react';
import styles from './index.module.css';

export const TimelineCard = ({ data }) => (
  <div className={styles.card}>
    <div className="left-section">
      <img src={data?.icon} alt="img" className="rounded-lg mx-auto" />
    </div>
    <div className="right-section relative">
      {Array.isArray(data?.title) ? (
        data?.title.map((sentence, index) => (
          // <React.Fragment key={index}>
          //   <div className={styles.squares} style={{ top: `${index * 100}px` }}></div> {/* Adjust the spacing as needed */}
          <div className={styles.list}>
            <p className="text-xl text-white font-semibold mb-20">{sentence}</p>
          </div>
          // </React.Fragment>
        ))
      ) : (
        // <React.Fragment key="single-title">
        //   <div className={styles.squares}></div> {/* Adjust the spacing as needed */}
        <div className={styles.list}>
          <h3 className="text-xl text-white font-semibold mb-0">{data?.title}</h3>
        </div>
        // </React.Fragment>
      )}
      <p className="text-sm text-white font-medium"></p>
    </div>
  </div>
);
