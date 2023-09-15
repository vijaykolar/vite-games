import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout.tsx";
import HomePage from "../pages/home-page.tsx";
import GameDetail from "../pages/game-detail.tsx";
import ErrorPage from "../pages/error-page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "games/:slug",
        element: <GameDetail />,
      },
    ],
  },
]);
