export default (io, socket) => ({ clientId, clientType, devices }) => {
  console.log("New device connected", { socket: socket.id, clientId, clientType, devices });
  io.emit("newUser", { socket: socket.id, clientId, clientType, devices });
};
