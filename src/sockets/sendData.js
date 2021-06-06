export default (io, socket) => () => {
  console.log("sendData", "dados de temperatura");
  io.emit("sendData", [10,5,8,12,10,8,5]);
};
