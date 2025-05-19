import { Button } from "antd";
import "./index.scss";

interface AppProps {
  name: string;
  handleActive: (value: string) => void;
}

const App: React.FC<AppProps> = ({ name, handleActive }) => {
  return (
    <>
      <Button onClick={() => handleActive("footer 组件传递的数据")}>
        提交数据给父组件{name}
      </Button>
    </>
  );
};

export default App;
