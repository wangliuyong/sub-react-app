import "./App.css";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes/index";

function App() {
  const location = useLocation();
  console.log(`location`, location);
  const routing = useRoutes(routes);
  return routing;
}

export default App;
