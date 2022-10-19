import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

/* const router = createBrowserRouter([
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
    ],
  },
]); */
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
