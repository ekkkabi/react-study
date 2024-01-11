import "./App.css";
import Hello from "./component/Hello";
import World from "./component/World";
import Welcom from "./component/Welcome";
import styles from "./component/App.module.css";

function App() {
  return (
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
