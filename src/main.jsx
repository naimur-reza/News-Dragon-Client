import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProfileLayout from "./components/ProfileLayout/ProfileLayout";
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
            path: "/",
            element: <Navigate to={"./categories/0"} />,
          },
          {
            path: "/categories/:id",
            element: <News />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.id}`),
          },
        ],
      },

      {
        path: "/news",
        element: <NewsLayout />,
        children: [
          {
            path: "/news/:id",
            element: (
              <PrivateRoute>
                <DetailsNews />
              </PrivateRoute>
            ),
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
    ],
  },
  {
    path: "/authorization",
    element: <LoginLayout />,
    children: [
      {
        path: "/authorization",
        element: <Login />,
      },
      {
        path: "/authorization/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <ProfileLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/profile",
        element: <Profile />,
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
