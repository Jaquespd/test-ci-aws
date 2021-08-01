import join from "./join";
import sendDeviceCommand from "./sendDeviceCommand";
import sendDeviceData from "./sendDeviceData";

export default (io) => (socket) => {
  socket.on("join", join(io, socket));
  socket.on("sendDeviceCommand", sendDeviceCommand(io, socket));
  socket.on("sendDeviceData", sendDeviceData(io, socket));
};
