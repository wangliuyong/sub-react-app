import "./index.css";
import { Table } from "antd";
import type { JSX } from "react";
import type { Props } from "./model";

const App = <T,>({ columns, dataSource }: Props<T>): JSX.Element => (
  <div className="table-container">
    <div className="search-container">search</div>
    <div className="tool-container">tool</div>
    <Table
      className="ant-table-container"
      columns={columns}
      dataSource={dataSource}
      virtual={true}
      scroll={{ y: "400px" }}
    />
  </div>
);

export default App;
