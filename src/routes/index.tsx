import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/home",
    element: <Home />,
    meta: { title: "首页", requiresAuth: false },
  },
];

export default routes;
