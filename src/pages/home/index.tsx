import { Fragment } from "react/jsx-runtime";
import "./index.scss";
import { Button, message } from "antd";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const handlClick = () => {
    setCount(count + 1);
  };

  const handleActive = (msg: string) => {
    console.log("msg", msg);
    message.success(msg);
  };
  return (
    <>
      <Fragment>
        <Header left={<span>header-slot 具名插槽渲染</span>} />
        <div className="p1">1. 使用Fragment</div>
        <div>{count}</div>
        <Button type="primary" onClick={handlClick}>
          Primary Button
        </Button>
        <Footer name="wang" handleActive={handleActive} />
      </Fragment>
    </>
  );
};

export default App;
