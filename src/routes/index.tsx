import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/sub-react-app",
    children: [
      {
        path: "home",
        element: <Home />,
        meta: { title: "three.js", requiresAuth: false },
      },
    ],
  },
];

export default routes;
