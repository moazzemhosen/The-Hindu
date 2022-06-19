
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from '../style/Home.module.css'
import {Carosol} from '../Carosol/carosol'

const Home = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:8080/home?_limit=6&_page=1");
      let data = await res.json();
       console.log("a",data);
       setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.griddiv}>
        {products.map((p, i) => (
          <div key={i} className={styles.eachdiv}>
            <div className={styles.image}>
              <img src={p.urlToImage} alt="" />
            </div>
            <div className={styles.description}>
              <h5>INTERNATIONAL</h5>
              <p>
                <Link to={`/${i}`}> {p.title}</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Carosol />
    </>
  );
};

export default Home;
