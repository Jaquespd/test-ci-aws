import join from "./join";
import commandReceived from "./commandReceived";
import sendSensorData from "./sendSensorData";

export default (io) => (socket) => {
  socket.on("join", join(io, socket));
  socket.on("commandReceived", commandReceived(io, socket));
  socket.on("sendSensorData", sendSensorData(io, socket));
};
