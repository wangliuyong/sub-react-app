import { Fragment } from "react/jsx-runtime";
import "./index.scss";
import { Button } from "antd";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const handlClick = () => {
    setCount(count + 1);
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
        <Footer name="wang" />
      </Fragment>
    </>
  );
};

export default App;
