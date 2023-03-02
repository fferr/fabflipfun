import socketIO from 'socket.io-client';
// THIS SHOULD BE PART OF COMMONS

let socket;
function startSocketEvents() {
  if (!socket) {
    console.error('Socket not initialized');
  }
  socket.on('connect', () => {
    console.log('Connected to socket');
  });
  socket.on('disconnect', () => {
    console.log('disconnected from server');
  });
  socket.on('new-video', (newVideo) => {
    console.log('newVideo', newVideo);
  });
}

export function createSocketConnection(endpoint) {
  if (!socket) {
    socket = socketIO.connect(endpoint);
    startSocketEvents();
  }
}
