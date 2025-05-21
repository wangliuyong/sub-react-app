import "./index.css";
import { Table } from "antd";
import type { JSX } from "react";
import type { Props } from "./model";
import Search from "../Search";
import Tool from "../Tool";

const App = <T,>(props: Props<T>): JSX.Element => (
  <div className="table-container">
    <Search />
    <Tool />
    <Table
      className="ant-table-container"
      {...props}
      virtual={false}
      scroll={{ y: "100%" }}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        // position: ["bottomCenter"],
      }}
    />
  </div>
);

export default App;
