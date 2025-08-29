import express from "express";
import { join } from "node:path";
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

export default httpServer;
