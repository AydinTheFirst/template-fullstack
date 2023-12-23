import { Socket } from "socket.io";
import { userModel } from "./helpers/schemas/user.js";
import { io } from "./server.js";

io.on("connection", async (socket): Promise<any> => {
  // Verify connection
  await verifyUser(socket);

  socket.on("join", (roomId) => {
    console.log(`User joined room ${roomId}`);
    socket.join(roomId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const findUser = async (socket: Socket) => {
  const user = await userModel.findOne({ token: socket.handshake.query.token });
  return user;
};

const verifyUser = async (socket: Socket) => {
  const user = await findUser(socket);
  if (!user) {
    socket.emit("error", "Invalid token!");
    socket.disconnect();
    return false;
  }
  return true;
};
