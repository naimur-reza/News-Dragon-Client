import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleNews from "./SingleNews";

const News = () => {
  const data = useLoaderData();
  const { id } = useParams();
  return (
    <>
      {data.map((cat_news, idx) => (
        <SingleNews key={idx} cat_news={cat_news}></SingleNews>
      ))}
    </>
  );
};

export default News;
