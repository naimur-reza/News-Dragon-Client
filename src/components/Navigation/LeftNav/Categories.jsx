import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((ct, idx) => (
        <p key={idx}>
          <Link
            to={`/categories/${ct.id}`}
            className="text-decoration-none text-muted fw-semibold"
          >
            {ct.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Categories;
