export default (io, socket) => (pro) => {
  console.log("Dados: ", pro);
  io.emit("sendSensorData", {socket: socket.id, ...pro});
};
