import join from "./join";

export default (io) => (socket) => {
  console.log("socket index");
  socket.on("join", join(io, socket));
};
