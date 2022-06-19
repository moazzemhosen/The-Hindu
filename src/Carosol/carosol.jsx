import { useEffect, useState } from "react";
import styles from '../style/carosol.module.css'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {  Button } from "@chakra-ui/react";



export const Carosol = () => {
  const [products, setProducts] = useState([]);
  const [limit,setLimit]=useState(0)

     useEffect(() => {
       async function fetchData() {
         let res = await fetch(`http://localhost:8080/articles?_limit=3&_page=${limit}`);
         let data = await res.json();
         console.log("d",data);
         setProducts(data);
       }
       fetchData();
     }, [limit]);
  const inc = () => {setLimit(limit+1)}
  const dec = () => {setLimit(limit - 1);};

  return (
    <div className={styles.carosolgrid}>
      <Button colorScheme="red" marginTop="80px" onClick={dec}>
        <ArrowLeftIcon />
      </Button>
      {products.map((e) => (
        <div className={styles.Carosoldiv}>
          <div className={styles.image}>
            <img src={e.urlToImage} alt="" />
          </div>
          <div className={styles.title}>
            <p>{e.title}</p>
          </div>
        </div>
      ))}
      <Button colorScheme="red" marginTop="80px" onClick={inc}>
        <ArrowRightIcon />
      </Button>
    </div>
  );
};
