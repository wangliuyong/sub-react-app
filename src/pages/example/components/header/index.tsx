import { useContext } from "react";
import "./index.scss";
import { MessageContext } from "../../index";

interface AppProps {
  left: React.ReactNode;
}

const App: React.FC<AppProps> = ({ left }) => {
  const value = useContext(MessageContext);
  return (
    <>
      <div>
        <div className="left">{left}</div>
        <div className="right">{value}</div>
      </div>
    </>
  );
};

export default App;
