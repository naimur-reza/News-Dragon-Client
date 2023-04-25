import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Categories from "./components/Navigation/LeftNav/Categories";
import RightNav from "./components/Navigation/RightNav/RightNav";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
