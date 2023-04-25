import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const DetailsNews = () => {
  const detailsData = useLoaderData();
  const { image_url, title, details, category_id } = detailsData;
  console.log(detailsData);
  return (
    <div className="card">
      <img className="card-img-top" src={image_url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{details}</p>
        <Link
          to={`/categories/${category_id}`}
          className="btn  btn-danger rounded-0"
        >
          <FaArrowLeft></FaArrowLeft>
          Show All Category News
        </Link>
      </div>
    </div>
  );
};

export default DetailsNews;
