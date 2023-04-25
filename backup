import React from "react";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import "./news.css";
const SingleNews = ({ newsData }) => {
  const {
    author,
    title,
    total_view,
    rating,
    category_id,
    thumbnail_url,
    details,
    image_url,
  } = newsData || {};
  const { img, name, published_date } = author;
  return (
    <div className="py-2">
      <div className="p-2 d-flex gap-3  bg-light align-items-center ">
        <img
          width={45}
          height={45}
          className="rounded-circle"
          src={img}
          alt=""
        />
        <div className="">
          <h6 className="fw-bold m-1">{name}</h6>
          <p className="text-muted m-1">{published_date}</p>
        </div>
        <div className="ms-auto d-flex gap-3">
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </div>
      <div className="p-2 border">
        <h5 className="fw-bold text-secondary py-2 tracking-lighter loading-7 ">
          {title}
        </h5>
        <img className="img-fluid" src={image_url} alt="" />
        <p className="text-muted mt-3 tracking-tighter">
          {details.slice(0, 300)}...
          <span className="ms-2 fw-bold  cursor-pointer">Read More</span>
        </p>
      </div>
    </div>
  );
};

export default SingleNews;
