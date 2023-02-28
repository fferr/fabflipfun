import socketIO from "socket.io-client";

const WS_ENDPOINT = process.env.REACT_APP_WS_URL;

let socket;

function startSocketEvents() {
  if (!socket) {
    console.error("Socket not initialized");
  }

  socket.on("connect", () => {
    console.log("Connected to socket");
  });

  socket.on("disconnect", () => {
    console.log("disconnected from server");
  });

  socket.on("message", (message) => {
    console.log("message", message);
  });
}

export function createSocketConnection() {
  if (!socket) {
    socket = socketIO.connect(WS_ENDPOINT);

    startSocketEvents();
  }
}
