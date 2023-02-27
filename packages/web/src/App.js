import "./App.css";
import { createSocketConnection, postMessage } from "./api/websocket";

createSocketConnection();

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    postMessage(message);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">post message</button>
      </form>
    </div>
  );
}

export default App;
