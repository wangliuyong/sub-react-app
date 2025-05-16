import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes/index";
import "./App.css";

function App() {
  const location = useLocation();
  console.log(`location`, location);
  const routing = useRoutes(routes);
  return routing;
}

export default App;
