import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import LeftNav from "./components/Navigation/LeftNav/Categories";
import Categories from "./components/Navigation/LeftNav/Categories";
import News from "./components/News/News";
import Profile from "./components/Profile";
import DetailsNews from "./components/DetailsNews/DetailsNews";
import NewsLayout from "./components/DetailsNews/NewsLayout";
import LoginLayout from "./components/LoginLayout/LoginLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/categories/:id",
            element: <News />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.id}`),
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/news",
        element: <NewsLayout />,
        children: [
          {
            path: "/news/:id",
            element: <DetailsNews />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/news/${params.id}`),
          },
        ],
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
