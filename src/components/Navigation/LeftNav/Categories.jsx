import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-light p-3 rounded">
      {categories.map((ct, idx) => (
        <p key={idx} className="">
          <NavLink
            to={`/categories/${ct.id}`}
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none text-muted fw-semibold bg-warning  rounded   d-block "
                : "text-decoration-none    text-muted fw-semibold"
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
