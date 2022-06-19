
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from '../style/Home.module.css'
import {Carosol} from '../Carosol/carosol'

const Home = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=61b72eea33844e8382ef5e05dace8e87&pageSize=6"
      );
      let data = await res.json();
      // console.log(data.articles);
       setProducts(data.articles);
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
