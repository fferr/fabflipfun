import socketIO from "socket.io-client";
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

export function createSocketConnection(endpoint) {
  if (!socket) {
    socket = socketIO.connect(endpoint);

    startSocketEvents();
  }
}
