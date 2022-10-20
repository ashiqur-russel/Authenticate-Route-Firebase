import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";
import Wallet from "../components/Wallet";
import Profile from "../components/Profile";

import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/wallet",
        element: (
          <PrivateRoute>
            <Wallet></Wallet>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
