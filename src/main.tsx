import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { BrowserRouter } from "react-router-dom";

let app: Root | null = null;
function render(props: { container?: Element | DocumentFragment | null }) {
  const { container } = props;

  const rootElement = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  if (!rootElement) {
    throw new Error("Root element #root not found");
  }

  app = createRoot(rootElement);
  app.render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
}

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
  update(props) {
    console.log("react - update", props);
  },
});
