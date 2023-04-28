import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorInsight from "../EditorInsight/EditorInsight";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../AuthProvider/AuthProvider";
const DetailsNews = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Spinner className="w-25 h-25" animation="border" role="status"></Spinner>
    );
  }
  const detailsData = useLoaderData();
  const { image_url, title, details, category_id } = detailsData;

  return (
    <>
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
      <div className="py-3">
        <h4 className="text-muted">Editors Insights</h4>
        <EditorInsight md={2} lg={3} />
      </div>
    </>
  );
};

export default DetailsNews;
