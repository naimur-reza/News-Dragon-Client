import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleNews from "./SingleNews";

const News = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/news`)
      .then((response) => response.json())
      .then((data) => setAllNews(data));
  }, []);
  const data = useLoaderData();
  const { id } = useParams();
  const news = allNews.filter((news) => news.category_id === id);
  return (
    <>
      {news.map((cat_news, idx) => (
        <SingleNews key={idx} cat_news={cat_news}></SingleNews>
      ))}
    </>
  );
};

export default News;
