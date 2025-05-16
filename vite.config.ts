import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
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
  ],
  server: {
    port: 7200,
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域
    },
  },
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["umd"],
      name: "sub-react-app",
    },
  },
  base: "/micro/sub-react-app",
});
