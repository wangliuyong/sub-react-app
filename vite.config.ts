import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import AutoImport from "unplugin-auto-import/vite";

import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "components", replacement: resolve(__dirname, "src/components") },
      { find: "pages", replacement: resolve(__dirname, "src/pages") },
      { find: "utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
  plugins: [
    react({
      // reactRefreshHost: false,
      // 禁用快速刷新以避免沙箱冲突 [4,6](@ref)
      // fastRefresh: false,
    }),
    qiankun("sub-app", {
      useDevMode: true,
      // sandbox: {
      //   strictStyleIsolation: true,
      //   experimentalStyleIsolation: true,
      // },
    }),
    AutoImport({
      imports: ["react", "react-router-dom"], // 自动引入 React Hooks
      dts: "src/auto-imports.d.ts", // 类型声明生成路径
      resolvers: [
        // ReactRouterResolver({
        //   prefix: "R", // 可选前缀，如 RLink、RRoute
        //   hooks: ["useNavigate", "useParams"], // 自动引入常用钩子
        // }),
      ],
    }),
  ],
  server: {
    port: 7200,
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域
    },
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      formats: ["umd"],
      name: "sub-react-app",
    },
  },
  base: "/micro/sub-react-app",
});
