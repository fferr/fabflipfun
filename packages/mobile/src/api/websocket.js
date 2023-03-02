import socketIO from 'socket.io-client';
import {GET_VIDEOS} from './queries';
// THIS SHOULD BE PART OF COMMONS

export let socket;

function startSocketEvents(getApolloClient) {
    if (!socket) {
        console.error('Socket not initialized');
    }
    socket.on('connect', () => {
        console.log('Connected to socket');
    });
    socket.on('disconnect', () => {
        console.log('disconnected from server');
    });
    socket.on('new-video', () => {
        const apolloClient = getApolloClient();
        apolloClient.refetchQueries({
            include: [GET_VIDEOS],
        });
    });
}

export function createSocketConnection(endpoint, getApolloClient) {
    if (!socket) {
        socket = socketIO.connect(endpoint);
        startSocketEvents(getApolloClient);
    }
}
