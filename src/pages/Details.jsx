import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const [data, setdata] = useState({});
    console.log(data);
  useEffect(() => {
    if (id) {
      async function getData() {
        let res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=61b72eea33844e8382ef5e05dace8e87&pageSize=${id}`
        );
        let data = await res.json();
        setdata(data.data);
      }
      getData();
    }
  }, [id]);
  return (
    <div>
     data
      
    </div>
  );
};

export default Details;
