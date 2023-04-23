import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      {categories.map((ct) => (
        <p key={ct.id}>
          <Link className="text-decoration-none text-muted fw-semibold">
            {ct.name}
          </Link>
        </p>
      ))}
    </>
  );
};

export default LeftNav;
