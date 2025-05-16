import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any = null;
function render(props) {
  const { container } = props;

  app = createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")!
  ).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

console.log("react-----", qiankunWindow);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

renderWithQiankun({
  mount(props) {
    console.log("react-mounted-mount", props);
    render(props);
  },
  bootstrap() {
    console.log("react - bootstrap");
  },
  unmount() {
    console.log("react - unmount");
    app?.unmount();
  },
});
