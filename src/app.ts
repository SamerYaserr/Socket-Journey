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

/**
 * emit: publish an event usiing emit('eventName', data)
 *
 * on: listen for an event using on('eventName', callback)
 */

/**
 * io: server-side socket.io instance
 *
 * socket: client-side socket.io instance
 */

io.on("connection", (socket) => {
  // when a user connects
  socket.on("chat message", (msg) => {
    // when the server receives a 'chat message' event

    console.log("message: " + msg);

    io.emit("chat message", msg);
    // emit the message to all connected clients
  });

  socket.on("typing", () => {
    // broadcast: send the event to all clients except the one that triggered the event
    socket.broadcast.emit("show_typing");
  });

  socket.on("stop_typing", () => {
    socket.broadcast.emit("hide_typing");
  });

  socket.on("disconnect", () => {
    // when a user disconnects
    console.log("user disconnected");
  });
});

export default httpServer;
