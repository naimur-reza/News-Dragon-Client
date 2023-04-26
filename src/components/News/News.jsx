import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import SingleNews from "./SingleNews";
import { Spinner } from "react-bootstrap";

const News = () => {
  const data = useLoaderData();
  const navigate = useNavigation();
  console.log(navigate.state);
  if (navigate.state === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center calc-load">
        <Spinner animation="grow" />
      </div>
    );
  }
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
