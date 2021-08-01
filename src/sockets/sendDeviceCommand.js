export default (io, socket) => ({ devicePorts, deviceType, action }) => {
  // { devicePorts: [ 5 ], deviceType: "relay", action: "on" }
  // { devicePorts: [ 6, 7, 8 ], deviceType: "rgb", action: "255#122#30" }
  if (deviceType === "relay") return io.emit("commandReceived", { devicePorts, deviceType, action });
  if (deviceType === "rgb") return io.emit("commandReceived", { devicePorts, deviceType, action });
};
