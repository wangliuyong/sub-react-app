import "./index.scss";

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  return <>{name}</>;
};

export default App;
