import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../ProfileLayout/Profile.css";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://myapp-naimur-reza.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-light p-3 rounded ">
      {categories.map((ct, idx) => (
        <p key={idx} className=" gy-1 p-2 bg-white rounded">
          <NavLink
            to={`/categories/${ct.id}`}
            className={({ isActive, isLoading }) =>
              isActive
                ? "text-decoration-none fw-semibold   p-0 m-0 text-warning  rounded  d-block "
                : "text-decoration-none    text-muted  fw-semibold"
            }
          >
            {ct.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default Categories;
