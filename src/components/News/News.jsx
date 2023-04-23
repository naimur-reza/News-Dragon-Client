import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/news`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <>
      <h5>Dragon News Home</h5>
      <div>
        {news.map((newsData) => (
          <SingleNews
            newsData={newsData}
            key={newsData.category_id}
          ></SingleNews>
        ))}
      </div>
    </>
  );
};

export default News;
