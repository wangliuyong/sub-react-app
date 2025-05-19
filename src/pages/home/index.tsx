import { Fragment } from "react/jsx-runtime";
import "./index.scss";
import { Button, message } from "antd";
import {
  createContext,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
  useState,
  memo,
} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect } from "react";

export const MessageContext = createContext("");

interface CountAction {
  type: "add" | "minus";
}

const countRender = (state: number, action: CountAction): number => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};

const Child = memo(
  forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      handleDemo() {
        message.success("ref  demo");
      },
    }));
    return <div>child</div>;
  })
);

const App: React.FC = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countRender, 0);
  const [name, setName] = useState("home");

  const count2 = useRef(0);
  const inputRef = useRef(null);
  const childRef = useRef(null);

  const handleActive = (msg: string) => {
    console.log("msg", msg);
    message.success(msg);
    setName(msg);

    console.log(`childRef`, childRef);
  };

  useEffect(() => {
    console.log("useEffect-count2", count, count2);
  });

  useEffect(() => {
    console.log("useEffect-count2 - []", count);
  }, []);

  useEffect(() => {
    console.log("useEffect-count2 - [count]", count);
  }, [count]);

  const memoData = useMemo(() => {
    return count;
  }, [count]);

  return (
    <>
      <MessageContext.Provider value={name}>
        <Fragment>
          <Header left={<span>header-slot 具名插槽渲染</span>} />
          <div className="p1">1. 使用Fragment</div>

          <Button
            type="primary"
            onClick={() => {
              dispatch({ type: "add" });
              count2.current = count;
            }}
          >
            数量增加
          </Button>
          <div className="p1">2. hooks</div>
          <div>useState,useContext,useRef,useReducer,useEffect</div>
          <div className="p1">useReducer</div>
          <div>
            <input type="text" ref={inputRef} />
            {count}
            {count2.current}
          </div>
          <div className="p1">
            useEffect,默认组件渲染时执行；只想要执行一次传空数组；传入依赖数组，依赖改变时执行
          </div>
          <Child ref={childRef} />

          <div className="p1">
            useMemo(function, [count])指定依赖发生变更才会执行。用来缓存数据
          </div>

          <div className="p1">
            useCallback
            缓存函数.使用场景：父组件传给子组件一个函数，memo缓存子组件时，需要使用useCallback缓存父组件传给子组件的函数，否则每次父组件渲染时，子组件都会重新渲染，无法缓存子组件
          </div>
          {memoData}

          <Footer name={name} handleActive={handleActive} />
        </Fragment>
      </MessageContext.Provider>
    </>
  );
};

export default App;
