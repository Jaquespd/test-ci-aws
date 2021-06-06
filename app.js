import express from "express";
import socketio from "socket.io";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { success, failure } from "./src/libs/response";
import socketHandler from "./src/sockets";

const app = express()
const server = http.createServer(app);

const port = process.env.port || 3000;

const io = socketio(server, {
  transports: ["websocket", "polling"],
});
io.origins(["*"]);
io.on("connection", socketHandler(io));

/* allow any origin */
app.options("*", cors());
app.use(cors());

/* parse body as JSON */
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server online!');
})


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

/* catch all other routes */
app.use(() => {
  throw new Error("This route doesn't exist.");
});

/* handle all errors */
app.use((err, req, res, next) => {
  /* eslint no-unused-vars: "off" */
  return failure(res, {
    error: err.message,
  });
});
