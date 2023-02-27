import "./App.css";
import { createSocketConnection } from "./api/websocket";

createSocketConnection();

function App() {
  return <div className="App"></div>;
}

export default App;
