export default (io, socket) => (data) => {
  console.log("Novo Dispositivo Conectado", data);
  io.emit("newUser", {socket: socket.id, ...data});
};
