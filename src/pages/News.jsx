import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../style/News.module.css'

const News = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
     async function fetchData() {
       let res = await fetch(
         "https://the-hindu-server.herokuapp.com/home"
       );
       let data = await res.json();
       console.log("a", data);
       setProducts(data);
     }
     fetchData();
   }, []);
  return (
    <div className={styles.griddiv}>
      {products.map((e) => (
        <div className={styles.grideachdiv} key={e.id}>
          <div className={styles.image}>
            <img src={e.urlToImage} alt="" />
          </div>
          <div className={styles.para}>
            <h6>TRENDING NEWS</h6>
            <Link to={`/news/${e.id}`}>
              <p className={styles.linked}>{e.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News