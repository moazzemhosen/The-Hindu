import React from 'react'
import styles from "../style/Title.module.css";

const Title = () => {
  return (
    <div className={styles.titlediv}>
      <div className={styles.titleimg}>
        <img
          src="https://www.thehindu.com/theme/images/th-online/logo.png" width="100%"
          alt=""
        />
      </div>
      <div className={styles.routingdiv}>
        <p>LATEST NEWS</p>
        <p>
          <span>FRIDAY,JUNE 17, 2022</span>
        </p>
        <p>E-PAPER</p>
      </div>
    </div>
  );
}

export default Title