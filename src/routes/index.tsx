import { lazy } from "react";

const Example = lazy(() => import("../pages/example"));
const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/micro/sub-react-app",
    children: [
      {
        path: "home",
        element: <Home />,
        meta: { title: "首页", requiresAuth: true },
      },
      {
        path: "example",
        element: <Example />,
        meta: { title: "例子", requiresAuth: true },
      },
    ],
  },
];

export default routes;
