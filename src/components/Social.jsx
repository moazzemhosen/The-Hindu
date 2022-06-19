import React from 'react'
import styles from "../style/styles.module.css";

const Social = () => {
  return (
    <div className={styles.flexdiv}>
      <div className={styles.socialicon}>
        <ul className={styles.socialarea}>
          <li>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
              width="25px"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className={styles.searchbar}>
        <form className={styles.form}>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Social