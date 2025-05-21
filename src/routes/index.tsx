import { lazy } from "react";

const Example = lazy(() => import("../pages/Example"));
const Home = lazy(() => import("../pages/Home"));
const ListPage = lazy(() => import("../pages/ListPage"));
const Ts = lazy(() => import("../pages/TS"));

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
      {
        path: "list",
        element: <ListPage />,
        meta: { title: "通用列表页面" },
      },
      {
        path: "ts",
        element: <Ts />,
        meta: { title: "TS" },
      },
    ],
  },
];

export default routes;
