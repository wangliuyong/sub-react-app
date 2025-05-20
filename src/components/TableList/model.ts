import type { TableColumnsType } from "antd";
// 定义泛型接口
export interface Props<T> {
  columns: TableColumnsType<T>;
  dataSource: T[];
}
