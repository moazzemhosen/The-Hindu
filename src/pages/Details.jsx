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
          `https://the-hindu-server.herokuapp.com/home/${id}`
        );
        let data = await res.json();
        setdata(data);
      }
      getData();
    }
  }, [id]);
  return (
    <div>
      <img src={data.urlToImage} alt="" />
      <h3>{data.title}</h3>
      <h3>{data.author}</h3>
      <h6>{data.publishedAt}</h6>
      <p>{data.content}</p>
    </div>
  );
};

export default Details;
