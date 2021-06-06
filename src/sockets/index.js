import join from "./join";
import sendData from "./sendData";

export default (io) => (socket) => {
  socket.on("join", join(io, socket));
  socket.on("sendData", sendData(io, socket));
};
