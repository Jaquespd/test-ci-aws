export default (io, socket) => ({ clientId, deviceId, deviceValue }) => {
  console.log("Device data: ", { socket: socket.id, clientId, deviceId, deviceValue });
  io.emit("sendDeviceData", {socket: socket.id, clientId, deviceId, deviceValue});
};
