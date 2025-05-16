import { Button } from "antd";
import "./index.scss";

interface AppProps {
  name: string;
  handleActive: (value: string) => void;
}

const App: React.FC<AppProps> = ({ handleActive }) => {
  return (
    <>
      <Button onClick={() => handleActive("footer 组件")}>
        提交数据给父组件
      </Button>
    </>
  );
};

export default App;
