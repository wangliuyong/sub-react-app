import "./index.css";
import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Space, theme } from "antd";

const { Option } = Select;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  return (
    <div className="tool-container">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </div>
  );
};

export default App;
