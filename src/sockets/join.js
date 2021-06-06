export default (io, socket) => () => {
  console.log("newUser", socket.id);
  io.emit("newUser", socket.id);
};
