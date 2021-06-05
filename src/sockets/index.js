import join from "./join";

export default (io) => (socket) => {
  socket.on("join", join(io, socket));
};
