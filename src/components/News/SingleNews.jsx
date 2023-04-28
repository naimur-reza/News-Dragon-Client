import React, { useContext } from "react";
import {
  FaRegBookmark,
  FaRegStar,
  FaStar,
  FaShareAlt,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Rating from "react-rating";
const SingleNews = ({ cat_news }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    author,
    title,
    total_view,
    rating,
    category_id,
    thumbnail_url,
    details,
    image_url,
  } = cat_news || {};
  // console.log(rating);
  const { img, name, published_date } = author || {};
  const handleDetails = (id) => {};
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
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-3 border">
        <h5 className="fw-bold text-secondary py-2 tracking-lighter loading-7 ">
          {title}
        </h5>
        <img className="img-fluid" src={image_url} alt="" />
        <p className="d-relative text-muted mt-3 tracking-tighter">
          {details?.slice(0, 300)}...
          <Link
            to={`../news/${_id}`}
            onClick={() => handleDetails(_id)}
            className="ms-2 text-danger fw-bold border-0 bg-white text-decoration-underline "
          >
            Read More
          </Link>
        </p>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div disabled className="d-flex align-items-center gap-2 ">
            <Rating
              className="text-warning  my-2  fs-5 "
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              initialRating={rating.number}
            />
            <span className="mt-1 fw-semibold text-muted">{rating.number}</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaEye className="fs-5 " />
            <p className="text-muted d-block my-2 fs-6">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
