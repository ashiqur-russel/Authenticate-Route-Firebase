import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
