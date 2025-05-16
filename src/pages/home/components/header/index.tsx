import "./index.scss";

interface AppProps {
  left: React.ReactNode;
}

const App: React.FC<AppProps> = ({ left }) => {
  return (
    <>
      <div>
        <div className="left">{left}</div>
      </div>
    </>
  );
};

export default App;
