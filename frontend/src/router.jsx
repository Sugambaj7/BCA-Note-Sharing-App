import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import About from "./components/About.jsx";
import Posts from "./components/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
