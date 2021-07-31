export default (io, socket) => (pro) => {
  io.emit("commandReceived", { id: "1", type: "led", action: "on" });
};
